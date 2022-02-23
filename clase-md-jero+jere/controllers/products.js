const path = require('path');
const fs = require('fs');

// DB File Path
const dbFilePath = path.resolve(__dirname, '../data/productsDataBase.json');

// DB content
const dbContent = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

// Express Validator
const { validationResult } = require("express-validator");

const controller = {
	index: (req, res) => {
		return res.render("products-list", {
			productsList: dbContent
		});
	},
	create: (req, res) => {
		return res.render("products-create");
	},
	store: (req, res) => {
		const validationErrors = validationResult(req);

		if (validationErrors.errors.length > 0) {
			return res.render("products-create", {
				errors: validationErrors.mapped(),
				formData: req.body
			});
		}

		const generateID = () => {
			// 1. Obtenemos el último producto almacenado en la DB
			const lastProduct = dbContent[dbContent.length - 1];
			// 2. Obtenemos el ID de ese último producto
			const lastID = lastProduct.id;
			// 3. Retornamos ese último ID incrementado en 1
			return lastID + 1;
		}

		// En el array de productos (DB) insertamos el nuevo producto con los datos que vinieron en req.body por POST
		dbContent.push({
			id: generateID(), // Así generamos el ID de manera dinámica
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			image: 'default-image.png', // como aún no sabemos subir archivos, dejamos para todos los productos nuevos esta imagen default
		});

		// Sobreescribimos de nuevo el archivo JSON
		fs.writeFileSync(dbFilePath, JSON.stringify(dbContent, null, ' '));

		// finalmente redireccionamos a /products
		return res.redirect('/products'); 
	}
}

module.exports = controller;
