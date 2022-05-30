

import express from 'express';
import { createMarca, deleteMarca, getAllMarca, getMarca, updateMarca } from '../controllers/MarcaController.js';

const router = express.Router()

//mostrar todos los Marca 


router.get('/', getAllMarca)

//mostrar un solo Marca 
router.get('/:id', getMarca)

//crear un Marca
router.post('/', createMarca)

//actualizar Marca 
router.put('/:id', updateMarca)

//Eliminar Marca 
router.delete('/:id', deleteMarca)

export default router