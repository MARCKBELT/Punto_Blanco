
import jwt  from "jsonwebtoken";
import bcrypt from  "bcrypt"
import config from '../config.js'
import {Op} from "sequelize"
//importamos el modelos

import {TipoUsuarioModel,UsuarioModel} from '../models/Models.js'

/**Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllUsuario = async (req, res) => {
  //console.log( {res});
  try {
    
    const Usuarios = await UsuarioModel.findAll({include:TipoUsuarioModel,
      
  });

    res.json(Usuarios);
  } catch (error) {
    
    res.json({ message44: error.message });
  }
};

//Mostrar un Registro

export const getUsuario = async (req, res) => {
  try {
    const Usuario = await UsuarioModel.findAll({
      where: {
        id: req.params.id,
      },
      include:TipoUsuarioModel,
    
    });
    res.json(Usuario[0]);
  } catch (error) {
    res.json({ message3: error.message });
  }
};



export const createUsuario = async (req, res) =>{
  const {email}=req.body
  console.log (email)
  try {
    const { nombre, direccion, email,ci, telefono, id_user, password } = req.body;
    
    console.log(req.body)
    
      const user = await UsuarioModel.findAll({
        where: {
            email:req.body.email
        }
      })
      console.log (user)
      if(user.length>0) 
          return res.status(400).json({msg: "The email already exists."})

      if(password.length < 6) 
          return res.status(400).json({msg: "Password is at least 6 characters long."})

      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10)
      const newUser = new UsuarioModel({
        nombre, direccion,email, ci, telefono, id_user:{default:2}, password:passwordHash
      })

      //Almacenamiento  en Mysql 

      const saveUser = await UsuarioModel.create({
        nombre, direccion,email, ci, telefono, id_user, password:passwordHash
      }); 
    //creamos el token que expira en 12 horas 
    const token =jwt.sign({id:saveUser.id},config.SECRET,{expiresIn:43200})
    res.json(
      {token});

    /* // Then create jsonwebtoken to authentication
      const accesstoken = createAccessToken({id: newUser._id}) 
     const refreshtoken = createRefreshToken({id: newUser._id})

      res.cookie('refreshtoken', refreshtoken, {
          httpOnly: true,
          path: '/user/refresh_token',//  /user/refresh_token
          maxAge: 7*24*60*60*1000 // 7d
      }) 

      res.json({accesstoken}) */ 

  } catch (error) {
    res.json({ message: error.message });
  }
}

//Actualizar un registro
export const updateUsuario = async (req, res) => {
  try {
    await UsuarioModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ messageee: error.message });
  }
};



//Eliminar un Register
export const deleteUsuario = async (req, res) => {
  try {
    await UsuarioModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};



export const login=  async (req, res) =>{
  try {
      const {email,password} = req.body;
      console.log({email,password})

      /* const user = await UsuarioModel.findOne({email})
      if(!user) return res.status(400).json({msg: "User does not exist."}) */
      const user = await UsuarioModel.findAll({
        where: {
          email: email
        }
      })
      console.log(user)
      if(!user) return res.status(400).json({msg56: "User does not exist."})
      
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

      // If login success , create access token and refresh token
      const accesstoken = createAccessToken({id: user._id})
      const refreshtoken = createRefreshToken({id: user._id})

      res.cookie('refreshtoken', refreshtoken, {
          httpOnly: true,
          path: '/user/refresh_token',
          maxAge: 7*24*60*60*1000 // 7d
      })

      res.json({accesstoken})

  } catch (err) {
      return res.status(500).json({msg43: err.message})
  }
}
export const logout= async (req, res) =>{
  try {
      res.clearCookie('refreshtoken', {path: '/usuario/refresh_token'})
      return res.json({msg: "Logged out"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}
export const refreshToken= (req, res) =>{
  try {
      const rf_token = req.cookies.refreshtoken;
      if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
          if(err) return res.status(400).json({msg: "Please Login or Register"})

          const accesstoken = createAccessToken({id: user.id})

          res.json({accesstoken})
      })

  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
  
}
const createAccessToken = (user) =>{
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}