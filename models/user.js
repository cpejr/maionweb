const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({


  fullname: String,
  birthDate: Date,

  type: {
    type: String,
    enum: ['Admin', 'Funcionario'],
    default: 'Funcionario'

  },

  register: {
    type: String, // CPF
    unique: true

  },
  adress: String,
  zipCode: String, //CEP

  email: {
    type: String,
    lowercase: true

  },

  phone: String, //residencial
  cellphone: String, //celular
  pis: String,
  workPermit: String //Carteria de Trabalho

}, { timestamps: true, static: false });

const UserModel = mongoose.model('User', userSchema);

class User {

  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      UserModel.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a User by it's id
   * @param {string} id - User Id
   * @returns {Object} - User Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      UserModel.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} user - User Document Data
   * @returns {string} - New User Id
   */
  static create(user) {
    return new Promise((resolve, reject) => {
      UserModel.create(user).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} User - User Document Data
   * @returns {null}
   */

  static update(id, user) {
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndUpdate(id, user).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a User
  * @param {string} id - User Id
  * @returns {null}
  */


  static delete(id) {
    return new Promise((resolve, reject) => {
      UserModel.findOneAndDelete({_id: id}).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = User;
