var express   = require("express"),
	controller = require("../controllers/index.js"),
	router     = express.Router();

router.route("/signup")
	.get(controller.renderSignUp);
	
module.exports = router;