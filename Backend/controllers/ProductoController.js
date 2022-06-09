
import { ProductoModel, ColorModel, TallaModel, CategoriaModel, MarcaModel } from '../models/Models.js'
/**Metodos para el CRUD**/

// image Upload
import multer from "multer"


import path from 'path';


//Mostrar todos los registros

export const getAllProducto = async (req, res) => {
  try {
    const producto = await ProductoModel.findAll({ include: [{ model: ColorModel }, { model: TallaModel }, { model: MarcaModel }, { model: CategoriaModel }] });

    res.json(producto);
  } catch (error) {
    res.json({ message4: error.message });
  }
};

//Mostrar un Registro

export const getProducto = async (req, res) => {
  try {
    const producto = await ProductoModel.findAll({
      where: {
        id: req.params.id
      },
    });
    res.json(producto[0]);
  } catch (error) {
    res.json({ message3: error.message });
  }
};

// Crear un Registro 
export const createProducto = async (req, res) => {
  console.log(req.body)
  try {
    const {
      producto,
      descripcion,
      stock,
      precio_venta,
      id_marca,
      id_color,
      id_talla,
      id_categoria,
      id_proveedor } = req.body;
    console.log(req.file)
    const imagen = req.file.filename;

    await ProductoModel.create({
      /* where: { producto: req.body.producto },
      defaults: { */
        producto,
        descripcion,
        stock,
        precio_venta,
        image: imagen,
        id_marca,
        id_talla,
        id_color,
        id_categoria,
        id_proveedor

      
    });

    res.json({
      message: "Se registo correctamente:",
    });

  } catch (error) {

    res.json({ message2: error.message });
  }


};

//Actualizar un registro
export const updateProducto = async (req, res) => {
  try {
    await ProductoModel.update(req.body, {
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
export const deleteProducto = async (req, res) => {
  

  try {
    await ProductoModel.destroy({
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

// 8. Upload Image Controller

const storage = multer.diskStorage({

  destination: (req, file, cb) => {


    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

export const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },

  /* fileFilter: (req, file, cb) => {
   
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)  
      const extname = fileTypes.test(path.extname(file.originalname))

      if(mimeType && extname) {
          return cb(null, true)
      }
      cb('Give proper files formate to upload')
  } */
}).single('image')

export const photo = async (req, res) => {
  try {
    const producto = await ProductoModel.findAll({
      where: {
        id: req.params.id
      },
    });

    const __dirname = path.resolve() + "/Images/" + producto[0].image

    console.log(__dirname)
    return res.sendFile(__dirname)
  } catch (error) {
    res.json({ message3: error.message });
  }
};