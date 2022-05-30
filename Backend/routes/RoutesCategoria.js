

import express from 'express';
import { createCategoria, deleteCategoria, getAllCategoria, getCategoria, updateCategoria } from '../controllers/CategoriaController.js';


 
const router = express.Router()

//mostrar todos los Categoria 


router.get('/', getAllCategoria)

//mostrar un solo Categoria 
router.get('/:id',  getCategoria)

//crear un Categoria
router.post('/', createCategoria)

//actualizar Categoria 
router.put('/:id', updateCategoria)

//Eliminar Categoria 
router.delete('/:id', deleteCategoria)




export default router


