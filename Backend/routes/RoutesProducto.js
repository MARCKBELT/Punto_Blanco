

import express from 'express';
import { createProducto, deleteProducto, getAllProducto, getProducto, updateProducto ,upload} from '../controllers/ProductoController.js';

const router = express.Router()

//mostrar todos los Producto 


router.get('/', getAllProducto)

//mostrar un solo Producto 
router.get('/:id', getProducto)

//crear un Producto
router.post('/register',upload, createProducto)

//actualizar Producto 
router.put('/:id', updateProducto)

//Eliminar Producto 
router.delete('/:id', deleteProducto)



export default router