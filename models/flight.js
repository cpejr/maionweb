const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

    from:[String],
    destination:[String],
    dateFrom:[Date],
    dateDestination: [Date],
    totalValueCHD: [String],
    tariffValueCHD: [String],
    taxValueCHD: [String],
    ravValueCHD: [String],
    totalValueAdult: [String],
    tariffValueAdult: [String],
    taxValueAdult: [String],
    ravValueAdult: [String],
    totalValueInf: [String],
    tariffValueInf: [String],
    taxValueInf: [String],
    ravValueAdult: [String],
    finalValue:[String],

    // adult:{
    //   value: Number,
    //   chd: Number,
    //   inf: Number
    // },
    // txEmb:{
    //   value: Number,
    //   chd: Number,
    //   inf: Number
    // },
    // rav:{
    //   value: Number,
    //   chd: Number,
    //   inf: Number
    // }

}, { timestamps: true, static: false });

const FlightModel = mongoose.model('Flight', flightSchema);

class Flight {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      FlightModel.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Flight by it's id
   * @param {string} id - Flight Id
   * @returns {Object} - Flight Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      FlightModel.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} flight - User Document Data
   * @returns {string} - New User Id
   */
  static create(flight) {
    return new Promise((resolve, reject) => {
      FlightModel.create(flight).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} flight - User Document Data
   * @returns {null}
   */
  static update(id, flight) {
    return new Promise((resolve, reject) => {
      FlightModel.findByIdAndUpdate(id, flight).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Flight
  * @param {string} id - Flight Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      FlightModel.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = Flight;
