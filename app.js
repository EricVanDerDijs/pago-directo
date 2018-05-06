var express        = require("express"),
	app            = express(),
	port           = process.env.PORT || 3000,
	dbUrl          = process.env.DB_URL || "mongodb://localhost/pago-directo";
	// require("./models/seedDB")();
	
//DB Config

// App Config
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//=================
// ROUTERS
//=================
app.use("/", 
	require("./routes/index.js"));

// ------ Server Start -----
app.listen(port, function(req, res){
	console.log("pago-directo started at port: " + port);
});