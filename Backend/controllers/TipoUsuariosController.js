//importamos el modelos
import {TipoUsuarioModel} from "../models/Models.js";

/**Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllTipoUsuarios = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuarioModel.findAll();
    res.json(tipoUsuario);
  } catch (error) {
    res.json({ message4: error.message});
  }
};

//Mostrar un Registro

export const getTipoUsuarios= async (req, res) => {
  try {
    const tipoUsuarios= await TipoUsuarioModel.findAll({
      where: {
        id: req.params.id
      },
    });
    res.json(tipoUsuarios[0]);
  } catch (error) {
    res.json({ message3: error.message });
  }
};

// Crear un Registro 
export const createTipoUsuarios = async (req, res) => {
  //console.log(req.body)
  try {        
     await TipoUsuarioModel.findOrCreate({where:{tipo_user: req.body.tipo_user}});
     
      res.json({
        message: "Se registo correctamente",
      });
    
    } catch (error) {
      res.json({ message2: error.message });
    }
    
  
};

//Actualizar un registro
export const updateTipoUsuarios = async (req, res) => {
  try {
    await TipoUsuarioModel.update(req.body, {
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
export const deleteTipoUsuarios =async (req,res)=>{
    try {
        await TipoUsuarioModel.destroy({
            where: {
                id: req.params.id,
              },
        })
        res.json({
            message: "Registro eliminado correctamente",
          });
        
    } catch (error) {
        res.json({ message: error.message });
      }
}
