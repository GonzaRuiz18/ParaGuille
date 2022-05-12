module.exports= function(sequelize,DataTypes){
    let alias='roles';

    let cols={
        id_rol:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncremente:true,
            allowNull:false

        },
        nombre_rol:{
            type:dataTypes.STRING(255),
            allowNull:false
        }

    };

    let config={
        tableName:'roles',
        timestamps:false
    }


    let roles= sequelize.define(alias,cols,config);

    roles.associate = function(models){
        roles.hasMany(models.usuario,{
            as:'usuarios',
            foreignKey:'id_rol'
        })
    }

    return roles
}