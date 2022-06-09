import {TipoUsuarioModel,UsuarioModel} from '../models/Models.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import config from '../config.js'
export const signin =async (req,res)=>{
   
    const userFound = await UsuarioModel.findOne({
        where:{email:req.body.email},
        include:[{model:TipoUsuarioModel}]
    })

    if(!userFound) return  res.json({message:'Usuario no Existe' })
    
    
    const matchPassword = await bcrypt.compare(req.body.password,userFound.password)

    if (!matchPassword)return res.status(400).json({msg: "Incorrect password."})
    
    console.log(userFound)
    const token =jwt.sign({id:userFound.id},config.SECRET,{expiresIn:43200})
    res.json({token});
   
  

   

}

export const signup =async (req,res)=>{
    res.json ('signup')


}
