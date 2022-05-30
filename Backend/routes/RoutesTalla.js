

import express from 'express';
import { createTalla, deleteTalla, getAllTalla, getTalla, updateTalla } from '../controllers/TallaController.js';

const router = express.Router()

//mostrar todos los Talla 


router.get('/', getAllTalla)

//mostrar un solo Talla 
router.get('/:id', getTalla)

//crear un Talla
router.post('/', createTalla)

//actualizar Talla 
router.put('/:id', updateTalla)

//Eliminar Talla 
router.delete('/:id', deleteTalla)

export default router