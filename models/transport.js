const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({

    from:String,
    dateFrom:Date,
    destination:String,
    dateDestination:Date,
    totalTrans: Number,
    value: {
      adult: Number,
      chd: Number,
      inf: Number
    }

}, { timestamps: true, static: false });

const TransportSchema = mongoose.model('Transport', transportSchema);

class Transport {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      TransportSchema.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Transport by it's id
   * @param {string} id - Transport Id
   * @returns {Object} - Transport Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      TransportSchema.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} transport - User Document Data
   * @returns {string} - New User Id
   */
  static create(transport) {
    return new Promise((resolve, reject) => {
      TransportSchema.create(transport).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} transport - User Document Data
   * @returns {null}
   */
  static update(id, transport) {
    return new Promise((resolve, reject) => {
      TransportSchema.findByIdAndUpdate(id, transport).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Transport
  * @param {string} id - Transport Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      TransportSchema.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = Transport;
