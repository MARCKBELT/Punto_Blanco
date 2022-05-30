import  {Sequelize} from "sequelize";
/* const { Sequelize } = require("sequelize"); */


const db =new Sequelize('punto_blanco','root','',{
    host:'localhost',
    dialect:'mysql',
    define:{freezeTableName:true}
},


)

/* const {TipoUsuarioModel,UsuarioModel}=Sequelize.models;
TipoUsuarioModel.hasMany(UsuarioModel,{
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false,
        name: "id_user",
      },
})
UsuarioModel.belongsToMany(models.TipoUsuarioModel,{
      
}); */

export default db