//importamos el modelos
import {MarcaModel} from "../models/Models.js";

/**Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllMarca = async (req, res) => {
  try {
    const marca = await MarcaModel.findAll();
    res.json(marca);
  } catch (error) {
    res.json({ message4: error.message});
  }
};

//Mostrar un Registro

export const getMarca= async (req, res) => {
  try {
    const marca= await MarcaModel.findAll({
      where: {
        id: req.params.id
      },
    });
    res.json(marca[0]);
  } catch (error) {
    res.json({ message3: error.message });
  }
};

// Crear un Registro 
export const createMarca = async (req, res) => {
  //console.log(req.body)
  try {        
     await MarcaModel.findOrCreate({where:{marca: req.body.marca}});
     
      res.json({
        message: "Se registo correctamente",
      });
    
    } catch (error) {
      res.json({ message2: error.message });
    }
    
  
};

//Actualizar un registro
export const updateMarca = async (req, res) => {
  try {
    await MarcaModel.update(req.body, {
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
export const deleteMarca=async (req,res)=>{
    try {
        await MarcaModel.destroy({
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
