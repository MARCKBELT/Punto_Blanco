

import express from 'express';

import {signin,signup } from '../controllers/AuthController.js';

const router = express.Router()

//mostrar para logerse en la palicacion 
router.post('/signup', signup)

//mostrar ingressa en la aplicacion  
router.post('/signin', signin)





export default router