let db=require('../database/models');


let peliculasController = {
    crear: function(req,res){

        db.Genero.findAll()
            .then(function(generos){
            return  res.render('listadoPeliculas',{generos:generos})
            })
    }






}
module.exports = peliculasController