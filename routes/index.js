var express   = require("express"),
	controller = require("../controllers/index.js"),
	router     = express.Router();

router.route("/signup")
	.get(controller.renderSignUp)
	.post(controller.logData);
	
module.exports = router;