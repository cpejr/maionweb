/**
 * Authentication Middleware
 */
const firebase = require('firebase');
// const router = express.Router();
// const express = require('express');

module.exports = {
  isAuthenticated: (req, res, next) => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      next();
    }
    else {
      res.redirect('/login');
    }
  },

  isAdmin: (req, res, next) => {
    const type = req.session.userType;
    if(type === 'Adm'){
      next();
    }
    else {
      res.redirect('/dashboardCom');
    }
  }


};
