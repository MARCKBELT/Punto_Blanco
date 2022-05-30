//importamos la conexion con la base de datos 
import db from "../database/db.js";


//importamos sequelize
import  {DataTypes}  from "sequelize";



const ColorModel = db.define('color',{
    id:{type:DataTypes.INTEGER,primaryKey:true},
    color:{type:DataTypes.STRING,/* onDelete:"CASCADE" */
        },
    codigo:{type:DataTypes.STRING},
    
    
},{modelName:"ColorModel"})







export default ColorModel
