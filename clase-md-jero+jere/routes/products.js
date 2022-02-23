const express = require("express");
const router = express.Router();

// Controller
const controller = require("../controllers/products");

// Middlewares
const productsMD = require("../middlewares/mdProducts");

// Express Validator 
const { check } = require("express-validator");

const validationRules = [
	check("name").notEmpty().withMessage("El nombre es obligatorio"),
	check("price")
		.notEmpty().withMessage("El precio es necesario").bail()
		.isInt({ min: 2000, max: 30000 }).withMessage("El precio deber ser numérico y estar entre 2000 y 30000"),
	check("description").notEmpty().withMessage("Escribe una descripción"),
];

// GET = localhost:3000/products (listado)
router.get("/", productsMD.mdProducts, controller.index);

// GET = localhost:3000/products/create (formulario creación)
router.get("/create", controller.create);

// POST = localhost:3000/products (metodo para almacenar)
router.post("/", validationRules, controller.store);

module.exports = router;