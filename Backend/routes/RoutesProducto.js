import {verifyToken,isAdmin,isProveedor,isUser,isProvOrAdmin} from '../middleware/index.js';

import express from 'express';

import { photo,createProducto, deleteProducto, getAllProducto, getProducto, updateProducto ,upload} from '../controllers/ProductoController.js';

const router = express.Router()

//mostrar todos los Producto 


router.get('/', getAllProducto)

//mostrar un solo Producto 
router.get('/:id', getProducto)

//crear un Producto
router.post('/register',[verifyToken,isProvOrAdmin],upload, createProducto)
router.get ('/Images/:id', photo)

//actualizar Producto 
router.put('/:id', [verifyToken,isAdmin],updateProducto)

//Eliminar Producto 
router.delete('/:id', [verifyToken,isProvOrAdmin],deleteProducto)



export default router