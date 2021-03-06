const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

  city: [String],
  coin: [String],
  acomodationType1:[String],
  acomodationType2:[String],
  acomodationType3:[String],
  hotel1: [String],
  hotel2: [String],
  hotel3: [String],
  qntd1: [String],
  qntd2: [String],
  qntd3: [String],
  valueApt1: [Number],
  valueApt2: [Number],
  valueApt3: [Number],
  numberDaily1: [Number],
  numberDaily2: [Number],
  numberDaily3: [Number],
  numberApt1: [Number],
  numberApt2: [Number],
  numberApt3: [Number],
  total1: [Number],
  total2: [Number],
  total3: [Number],
  food1: [String],
  food2: [String],
  food3: [String],//: ['Café', 'Meia Pensão', 'All Inclus', 'Outro']
  category1: [String],
  category2: [String],
  category3: [String],
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

 static getByIdArray(id_array){
     return new Promise((resolve, reject)=> {
         HotelSchema.find({ _id: {$in: id_array} }).then((hotels)=>{
             resolve(hotels);
         }).catch((err) => {
         reject(err);
       });
     })
 }

}

module.exports = Hotel;
