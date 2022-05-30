//importamos la conexion con la base de datos 
import db from "../database/db.js";


//importamos sequelize
import  {DataTypes}  from "sequelize";



const CategoriaModel = db.define('categoria',{
    id:{type:DataTypes.INTEGER,primaryKey:true},
    categoria:{type:DataTypes.STRING,/* onDelete:"CASCADE" */
        },
   
    
    
},{modelName:"CategoriaModel"})







export default CategoriaModel
