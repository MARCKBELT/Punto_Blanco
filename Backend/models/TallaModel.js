//importamos la conexion con la base de datos 
import db from "../database/db.js";


//importamos sequelize
import  {DataTypes}  from "sequelize";



const TallaModel = db.define('talla',{
    //id:{type:DataTypes.INTEGER,primaryKey:true},
    talla:{type:DataTypes.STRING,/* onDelete:"CASCADE" */
        },
    
    
},{modelName:"TallaModel"})







export default TallaModel
