//importamos el modelos
import {ColorModel} from "../models/Models.js";

/**Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllColor = async (req, res) => {
  try {
    const color = await ColorModel.findAll();
    res.json(color);
  } catch (error) {
    res.json({ message4: error.message});
  }
};

//Mostrar un Registro

export const getColor= async (req, res) => {
  try {
    const color= await ColorModel.findAll({
      where: {
        id: req.params.id
      },
    });
    res.json(color[0]);
  } catch (error) {
    res.json({ message3: error.message });
  }
};

// Crear un Registro 
export const createColor = async (req, res) => {
  //console.log(req.body)
  try {        
     await ColorModel.findOrCreate({where:{color: req.body.color}});
     
      res.json({
        message: "Se registo correctamente",
      });
    
    } catch (error) {
      res.json({ message2: error.message });
    }
    
  
};

//Actualizar un registro
export const updateColor = async (req, res) => {
  try {
    await ColorModel.update(req.body, {
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
export const deleteColor=async (req,res)=>{
    try {
        await ColorModel.destroy({
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
