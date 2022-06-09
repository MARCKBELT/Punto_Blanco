import express from 'express';
import { createUsuario, deleteUsuario, getAllUsuario, getUsuario, updateUsuario } from '../controllers/UsuarioController.js';
import {verifyToken,isAdmin,isProveedor,isUser,isProvOrAdmin,isUserProvOrAdmin} from '../middleware/index.js';

const router = express.Router()

//mostrar todos los Usuario 


router.get('/',[verifyToken,isProvOrAdmin] ,getAllUsuario)

//mostrar un solo Usuario 
router.get('/:id',[verifyToken,isUserProvOrAdmin], getUsuario)


//crear un Usuario
router.post('/', createUsuario)



//actualizar Usuario 
router.put('/:id', [verifyToken,isProvOrAdmin],updateUsuario)

//Eliminar Usuario 
router.delete('/:id', [verifyToken,isAdmin],deleteUsuario)

export default router