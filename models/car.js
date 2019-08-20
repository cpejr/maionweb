const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({

    withdrawal: [String],
    others: [String],
    delivery: [String],
    totalCar: [Number],
    city: [String],
    typeCar: [String],
    shift:[{
      type: String,
      enum:['Manual', 'Automático']
    }],
    safe: [String]


}, { timestamps: true, static: false });

const CarSchema = mongoose.model('Car', carSchema);

class Car {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      CarSchema.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Car by it's id
   * @param {string} id - Car Id
   * @returns {Object} - Car Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      CarSchema.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} car - User Document Data
   * @returns {string} - New User Id
   */
  static create(car) {
    return new Promise((resolve, reject) => {
      CarSchema.create(car).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

    /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} car - User Document Data
   * @returns {null}
   */
  static update(id, car) {
    return new Promise((resolve, reject) => {
      CarSchema.findByIdAndUpdate(id, car).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Car
  * @param {string} id - Car Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      HotelSchema.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = Car;
