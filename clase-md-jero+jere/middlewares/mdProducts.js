const mdProducts = (req, res, next) => {
	console.log("Pasaste por el MD de /products");
	const day = "martes";
	if (day === "martes") {
		return next();
	} else {
		return res.redirect("/register");
	}
}

const otroMD = (req, res, next) => {
	console.log("Este es otro MD");
	next();
}

module.exports = { mdProducts, otroMD };