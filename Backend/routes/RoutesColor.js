

import express from 'express';
import { createColor, deleteColor, getAllColor, getColor, updateColor } from '../controllers/ColorController.js';

const router = express.Router()

//mostrar todos los Color 


router.get('/', getAllColor)

//mostrar un solo Color 
router.get('/:id', getColor)

//crear un Color
router.post('/', createColor)

//actualizar Color 
router.put('/:id', updateColor)

//Eliminar Color 
router.delete('/:id', deleteColor)

export default router