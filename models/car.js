const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({

    from: [String],
    to: [String],
    dateFrom: [String],
    timeFrom: [String],
    valueADT: [Number],
    numADT:[Number],
    valueCHD: [Number],
    numCHD:[Number],
    valueINF: [Number],
    numINF:[Number],
    totalTranslado: [Number],
    coinT: [String],

    typeCar: [String],
    withdrawal: [String],
    delivery: [String],
    totalCar: [Number],
    city: [String],
    shift:[String],
    safe: [String],
    coinC: [String],
    others: [String],


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
      CarSchema.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

 static getByIdArray(id_array){
     return new Promise((resolve, reject)=> {
         CarSchema.find({ _id: {$in: id_array} }).then((cars)=>{
             resolve(cars);
         }).catch((err) => {
         reject(err);
       });
     })
 }

}

module.exports = Car;
