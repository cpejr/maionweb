const mongoose = require('mongoose');

const safeSchema = new mongoose.Schema({

  insuranceName: [String],
  insuranceCoverage: [String],
  insuranceADT: [Number],
  SafenumADT: [Number],
  insuranceCHD: [Number],
  SafenumCHD: [Number],
  insuranceINF: [Number],
  SafenumINF: [Number],
  insuranceCoin: [String],
  insuranceTOT: [Number],

  ticketsName: [String],
  ticketsADT: [Number],
  TicketnumADT: [Number],
  ticketsCHD: [Number],
  TicketnumCHD: [Number],
  ticketsINF: [Number],
  TicketnumINF: [Number],
  ticketsCoin: [String],
  ticketsTOT: [Number],

  otherName: [String],
  otherADT: [Number],
  OthernumADT: [Number],
  otherCHD: [Number],
  OthernumCHD: [Number],
  otherINF: [Number],
  OthernumINF: [Number],
  otherCoin: [String],
  otherTOT: [Number],

}, { timestamps: true, static: false });

const SafeSchema = mongoose.model('Safe', safeSchema);

class Safe {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      SafeSchema.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Safe by it's id
   * @param {string} id - Safe Id
   * @returns {Object} - Safe Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      SafeSchema.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} safe - User Document Data
   * @returns {string} - New User Id
   */
  static create(safe) {
    return new Promise((resolve, reject) => {
      SafeSchema.create(safe).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} safe - User Document Data
   * @returns {null}
   */
  static update(id, safe) {
    return new Promise((resolve, reject) => {
      SafeSchema.findByIdAndUpdate(id, safe).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Safe
  * @param {string} id - Safe Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      SafeSchema.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

 static getByIdArray(id_array){
     return new Promise((resolve, reject)=> {
         SafeSchema.find({ _id: {$in: id_array} }).then((safes)=>{
             resolve(safes);
         }).catch((err) => {
         reject(err);
       });
     })
 }

}

module.exports = Safe;
