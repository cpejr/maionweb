/**
 * Authentication Middleware
 */
const firebase = require('firebase');

module.exports = {
  isAuthenticated: (req, res, next) => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      next();
    }
    else {
      res.redirect('/login');
    }
  }
};
