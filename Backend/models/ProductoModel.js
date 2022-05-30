//importamos la conexion con la base de datos 
import db from "../database/db.js";


//importamos sequelize
import  {DataTypes}  from "sequelize";



const ProductoModel = db.define('producto',{
    //id_producto:{type:DataTypes.INTEGER,primaryKey:true},

    producto:{type:DataTypes.STRING},
    descripcion:{type:DataTypes.STRING},
    stock:{type:DataTypes.INTEGER},
    precio_venta:{type:DataTypes.FLOAT},
    image:{type:DataTypes.STRING},    
    id_marca:{type:DataTypes.INTEGER},
    id_talla:{type:DataTypes.INTEGER},
    id_color:{type:DataTypes.INTEGER},
    id_categoria:{type:DataTypes.INTEGER},
    id_proveedor:{type:DataTypes.INTEGER},
    
},{modelName:"ProductoModel"})

export default ProductoModel
