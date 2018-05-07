var express     = require("express"),
	bodyParser    = require("body-parser"),
	app           = express(),
	port          = process.env.PORT || 3000,
	dbUrl         = process.env.DB_URL || "mongodb://localhost/pago-directo";
	

// App Config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
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