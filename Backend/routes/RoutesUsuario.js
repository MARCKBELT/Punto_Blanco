

import express from 'express';
import { createUsuario, deleteUsuario, getAllUsuario, getUsuario, logout, refreshToken, updateUsuario } from '../controllers/UsuarioController.js';

const router = express.Router()

//mostrar todos los Usuario 


router.get('/', getAllUsuario)

//mostrar un solo Usuario 
router.get('/:id', getUsuario)

//el logout del usuario
router.get('/logout', logout)

//el refresh
router.get('/refresh_token', refreshToken)

//crear un Usuario
router.post('/', createUsuario)



//actualizar Usuario 
router.put('/:id', updateUsuario)

//Eliminar Usuario 
router.delete('/:id', deleteUsuario)



export default router