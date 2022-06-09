import  express from 'express';
import cors from 'cors';
import morgan from "morgan";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { createRoles } from './libs/initialSetup.js';
//importamos la conexxion a db
import db from './database/db.js';

//importamos nuestro enrutador
import tipoUsuariosRoutes from "./routes/RoutesTipoUsuario.js";
import usuarioRoutes from "./routes/RoutesUsuario.js";
import productoRoutes from "./routes/RoutesProducto.js";
import categoriaRoutes from "./routes/RoutesCategoria.js";
import colorRoutes from './routes/RoutesColor.js';
import marcaRoutes from './routes/RoutesMarca.js'
import tallaRoutes from './routes/RoutesTalla.js';
import authRoutes from './routes/RoutesAuth.js'


//console.log ('aquiiiiii')
//console.log (tipoUsuariosRoutes.stack[1].route)

const app  = express();
createRoles();

app.use(cors())
app.use(express.json())//convierte las peticiones a JSON REQ.body
app.use(morgan())

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());
//app.use(fileUpload({useTempFiles :true}))


app.use('/tipoUsuario',tipoUsuariosRoutes)
app.use('/usuario',usuarioRoutes)

app.use('/producto',productoRoutes)
app.use('/categoria',categoriaRoutes)
app.use('/color',colorRoutes)
app.use('/marca',marcaRoutes)
app.use('/talla',tallaRoutes)


app.use('/auth',authRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a Base de DAtos')
} catch (error) {
   console.log(`El error de conexion a DB es: ${error}`)
}
/*app.get('/',(req, res)=>{
    res.send('Hola Mundo')
})*/

app.listen(8000,()=>{
    console.log('Server Up running in http://localhost:8000/')
})