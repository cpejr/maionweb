const mongoose = require('mongoose');

const otherSchema = new mongoose.Schema({

  clientList: [String],
  freeField: String,
  adt: Number,
  chd: Number,
  inf: Number,
  totalOthers: Number

}, { timestamps: true, static: false });

const TicketSchema = mongoose.model('Other', otherSchema);

class Other {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      TicketSchema.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Other by it's id
   * @param {string} id - Other Id
   * @returns {Object} - Other Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      TicketSchema.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} Other - User Document Data
   * @returns {string} - New User Id
   */
  static create(other) {
    return new Promise((resolve, reject) => {
      TicketSchema.create(other).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} other - User Document Data
   * @returns {null}
   */
  static update(id, other) {
    return new Promise((resolve, reject) => {
      TicketSchema.findByIdAndUpdate(id, other).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Other
  * @param {string} id - Other Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      TicketSchema.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = Other;
