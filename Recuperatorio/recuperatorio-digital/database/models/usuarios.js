const { config } = require("../../.sequelizerc")

module.exports= function(sequelize,DataTypes){
    let alias='usuario';

    let cols={
        id_usuario:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncremente:true,
            allowNull: false

        },
        user_name:{
            type:DataTypes.STRING(255),
            allowNull: false
        },
        pass:{
            type:DataTypes.STRING(255),
            allowNull: false
        },
        nombre:{
            type:DataTypes.STRING(255),
            allowNull: false
        },
        imagen:{
            type:DataTypes.STRING(255),
            allowNull: false
        },
        rol:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        estado:{
            type:DataTypes.INTEGER,
            allowNull: false
        }


    };

    let config={
        tableName:'usuarios',
        timestamps:false
    }


    let usuarios= sequelize.define(alias,cols,config);

    usuarios.associate = function(models){
        usuarios.belongsTo(models.roles,{
            as:'rol',
            foreignKey:'id_rol'
        });
        usuarios.belongsTo(models.estado,{
            as:'estado',
            foreignKey:'id_estado'
        })
    };

    return usuarios
}