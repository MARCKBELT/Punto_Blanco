//importamos la conexion con la base de datos 
import db from "../database/db.js";


//importamos sequelize
import  {DataTypes}  from "sequelize";



const TipoUsuarioModel = db.define('tipo_usuario',{
    //id:{type:DataTypes.INTEGER,primaryKey:true},
    tipo_user:{type:DataTypes.STRING,/* onDelete:"CASCADE" */
        },
    
    
},{modelName:"TipoUsuarioModel"})







export default TipoUsuarioModel

