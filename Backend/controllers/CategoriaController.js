//importamos el modelos
import {CategoriaModel }from "../models/Models.js";

/**Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllCategoria = async (req, res) => {
  try {
    const categoria = await CategoriaModel.findAll();
    res.json(categoria);
  } catch (error) {
    res.json({ message4: error.message});
  }
};

//Mostrar un Registro

export const getCategoria= async (req, res) => {
  try {
    const categoria= await CategoriaModel.findAll({
      where: {
        id: req.params.id
      },
    });
    res.json(categoria[0]);
  } catch (error) {
    res.json({ message3: error.message });
  }
};

// Crear un Registro 
export const createCategoria = async (req, res) => {
  //console.log(req.body)
  try {        
     await CategoriaModel.findOrCreate({where:{categoria: req.body.categoria}});
     
      res.json({
        message: "Se registo correctamente",
      });
    
    } catch (error) {
      res.json({ message2: error.message });
    }
    
  
};

//Actualizar un registro
export const updateCategoria = async (req, res) => {
  try {
    await CategoriaModel.update(req.body, {
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
export const deleteCategoria=async (req,res)=>{
    try {
        await CategoriaModel.destroy({
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
