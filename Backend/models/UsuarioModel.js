//importamos la conexion con la base de datos 
import db from "../database/db.js";

//importamos sequelize
import { DataTypes} from "sequelize";


    const UsuarioModel = db.define('usuario', {
       //id:{type:DataTypes.INTEGER,primaryKey:true,allowNull:true},
        nombre: {
            type: DataTypes.STRING,required:true
        },
        email: {type: DataTypes.STRING,unique:true,required:true/* validate: {
            notNull: { msg: "email is required for register userr" },
          } */},
        direccion: { type: DataTypes.STRING },
        ci: { type: DataTypes.INTEGER },
        telefono: { type: DataTypes.INTEGER },
        id_user:{ type: DataTypes.INTEGER},
        password: { type: DataTypes.STRING,required:true },



    },{})

  
console.log (UsuarioModel)
export default UsuarioModel