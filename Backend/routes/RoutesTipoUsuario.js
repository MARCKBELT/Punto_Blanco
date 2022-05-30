

import express from 'express';
import { createTipoUsuarios, deleteTipoUsuarios, getAllTipoUsuarios, getTipoUsuarios, updateTipoUsuarios } from '../controllers/TipoUsuariosController.js';

const router = express.Router()

//mostrar todos los blogs

router.get('/', getAllTipoUsuarios)

//mostrar un solo blog
router.get('/:id', getTipoUsuarios)

//crear un blog
router.post('/', createTipoUsuarios)

//actualizar blog
router.put('/:id', updateTipoUsuarios)

//Eliminar Blog
router.delete('/:id', deleteTipoUsuarios)

export default router