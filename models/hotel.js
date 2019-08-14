const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

  city: String,
  option:[{
    hotel: String,
    valueApt: Number,
    numberDaily: Number,
    numberApt: Number,
    total: Number
  }],
  food: {
    type: String,
    //: ['Café', 'Meia Pensão', 'All Inclus', 'Outro']
  },
  cancellationPeriod: {
    type: String,
    // enum: ['Sem Prazo', 'Com Prazo', 'Outro']
  }


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
