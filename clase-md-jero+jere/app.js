const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => console.log("Server running on 3000 port"));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware de aplicación
app.use((req, res, next) => {
	console.log("Pasaste por el MD global");
	return next();
});

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

const usersRoutes = require('./routes/users');
app.use('/users',usersRoutes);

app.get("/register", (req, res) => {
	return res.send("Llegaste al Register");
})