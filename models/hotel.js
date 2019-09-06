const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

  city: [String],

  hotel1: [String],
  hotel2: [String],
  hotel3: [String],
  valueApt1: [Number],
  valueApt2: [Number],
  valueApt3: [Number],
  numberDaily: [Number],
  numberApt: [Number],
  total1: [Number],
  total2: [Number],
  total3: [Number],
  category1: [String],
  category2: [String],
  category3: [String],


  food: [String],//: ['Café', 'Meia Pensão', 'All Inclus', 'Outro']

  cancellationPeriod:[String],// enum: ['Sem Prazo', 'Com Prazo', 'Outro']
  cancellationPeriod2:[String],// enum: ['Sem Prazo', 'Com Prazo', 'Outro']
  cancellationPeriod3:[String],// enum: ['Sem Prazo', 'Com Prazo', 'Outro']


}, { timestamps: true, static: false });

const HotelSchema = mongoose.model('hotel', hotelSchema);

class Hotel {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      HotelSchema.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Hotel by it's id
   * @param {string} id - Hotel Id
   * @returns {Object} - Hotel Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      HotelSchema.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} hotel - User Document Data
   * @returns {string} - New User Id
   */
  static create(hotel) {
    return new Promise((resolve, reject) => {
      HotelSchema.create(hotel).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} hotel - User Document Data
   * @returns {null}
   */
  static update(id, hotel) {
    return new Promise((resolve, reject) => {
      HotelSchema.findByIdAndUpdate(id, hotel).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Hotel
  * @param {string} id - Hotel Id
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

module.exports = Hotel;
