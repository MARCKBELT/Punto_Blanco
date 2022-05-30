

//importamos el modelos
import {TallaModel} from "../models/Models.js";

/**Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllTalla = async (req, res) => {
  try {
    const talla = await TallaModel.findAll();
    res.json(talla);
  } catch (error) {
    res.json({ message4: error.message});
  }
};

//Mostrar un Registro

export const getTalla= async (req, res) => {
  try {
    const talla= await TallaModel.findAll({
      where: {
        id: req.params.id
      },
    });
    res.json(talla[0]);
  } catch (error) {
    res.json({ message3: error.message });
  }
};

// Crear un Registro 
export const createTalla = async (req, res) => {
  //console.log(req.body)
  try {        
     await TallaModel.findOrCreate({where:{talla: req.body.talla}});
     
      res.json({
        message: "Se registo correctamente",
      });
    
    } catch (error) {
      res.json({ message2: error.message });
    }
    
  
};

//Actualizar un registro
export const updateTalla = async (req, res) => {
  try {
    await TallaModel.update(req.body, {
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
export const deleteTalla=async (req,res)=>{
    try {
        await TallaModel.destroy({
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