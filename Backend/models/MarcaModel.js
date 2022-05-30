//importamos la conexion con la base de datos 
import db from "../database/db.js";


//importamos sequelize
import  {DataTypes}  from "sequelize";



const MarcaModel = db.define('marca',{
    id:{type:DataTypes.INTEGER,primaryKey:true},
    marca:{type:DataTypes.STRING,/* onDelete:"CASCADE" */
        },
    
    
},{modelName:"MarcaModel"})

export default MarcaModel
