const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  })
}

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  User.find({ email: email })
  .then(users => {
    if (users.length > 0) {
      req.session.isLoggedIn = true;
      req.session.user = users[0];
      return req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    }
  })
  .catch(err => console.log(err));
}

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
}