import CategoriaModel from "./CategoriaModel.js";
import ColorModel from "./ColorModel.js";
import MarcaModel from "./MarcaModel.js";
import ProductoModel from "./ProductoModel.js";
import TallaModel from "./TallaModel.js";
import TipoUsuarioModel from "./TipoUsuariosModel.js";
import UsuarioModel from "./UsuarioModel.js";

// 1:N 
TipoUsuarioModel.hasMany (UsuarioModel,{
        foreignKey:'id_user'    });
UsuarioModel.belongsTo(TipoUsuarioModel,{
        foreignKey:'id_user'     });

ColorModel.hasMany(ProductoModel, {foreignKey:'id_color'})  ;
ProductoModel.belongsTo(ColorModel,{foreignKey:'id_color'}) ; 


 MarcaModel.hasMany(ProductoModel,{foreignKey:'id_marca'});
 ProductoModel.belongsTo(MarcaModel,{foreignKey:'id_marca'});

 TallaModel.hasMany(ProductoModel,{foreignKey:'id_talla'});
ProductoModel.belongsTo(TallaModel,{foreignKey:'id_talla'});




CategoriaModel.hasMany(ProductoModel,{foreignKey:'id_categoria'});
ProductoModel.belongsTo(CategoriaModel,{foreignKey:'id_categoria'});



export {TipoUsuarioModel,UsuarioModel,ColorModel,TallaModel,CategoriaModel,MarcaModel,ProductoModel}