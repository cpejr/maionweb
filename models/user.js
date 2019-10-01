const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

  fullName: String,

  uid:{
    type: String,
  },

  userType:{
    type: String,
    enum:['Adm','Com'],
    default:'Com',
  }
}, { timestamps: true, static: false });
const UserModel = mongoose.model('User', userSchema);
class User {
  /**
   * Get all users from database
   * @returns {Array} Array of users
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
   * Get a user by it's id
   * @param {string} id - user Id
   * @returns {Object} - user Document Data
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
   * Create a new user
   * @param {Object} user - user Document Data
   * @returns {string} - New user Id
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
   * Update a user
   * @param {string} id - user Id
   * @param {Object} user - user Document Data
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
  * Delete a user
  * @param {string} id - user Id
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

  static getByUid(id) {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ uid: id }).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  
  /**
  * Add flight to users
  * @param {string} id - user Id
  * @param {string} flight - flight Id
  * @returns {null}
  */
  static addFlight(id, flight) {
   return new Promise((resolve, reject) => {
     UserModel.findByIdAndUpdate(id, { $push: { flights: flight } }).catch((err) => {
       reject(err);
     });
   });
  }



  /**
  * Add budget to users
  * @param {string} id - user Id
  * @param {string} budget - budget Id
  * @returns {null}
  */
  static addBudget(id, budget) {
   return new Promise((resolve, reject) => {
     UserModel.findByIdAndUpdate(id, { $push: { budgets: budget } }).then(()=>{
       resolve();
     }).catch((err) => {
       reject(err);
     });
   });
  }
}
module.exports = User;
