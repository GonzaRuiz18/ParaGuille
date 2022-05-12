module.exports= function(sequelize,DataTypes){
    let alias='estados';

    let cols={
        id_estado:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncremente:true,
            allowNull:false

        },
        tipo_estado:{
            type:dataTypes.STRING(255),
            allowNull:false
        }

    };

    let config={
        tableName:'estados',
        timestamps:false
    }


    let estados= sequelize.define(alias,cols,config);

    estados.associate = function(models){
        estados.hasMany(models.usuario,{
            as:'usuarios',
            foreignKey:'id_estado'
        })
    }

    return estados
}