const db = require('../database/models');
const sequelize = db.sequelize;

const apiGenresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.json('genresList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.json('genresDetail.ejs', {genre});
            });
    }

}

module.exports = apiGenresController;