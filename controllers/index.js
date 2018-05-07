var indexRoutesController = {
   //Render SignUp Form
   renderSignUp: function (req, res) {
      res.render("signup");
   },
  logData: function (req, res) {
    console.log(req.body);
    res.redirect('/signup');
  }
}
module.exports = indexRoutesController;