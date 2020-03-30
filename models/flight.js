const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

    flightNum: [String],
    dateFlight:[String],
    from:[String],
    destination:[String],
    timeOut: [String],
    timeIn: [String],
    coin:[String],

    // Primeira classe
    totalValueCHD_FirstClass: [Number],
    tariffValueCHD_FirstClass: [Number],
    taxValueCHD_FirstClass: [Number],
    ravValueCHD_FirstClass: [Number],
    numCHD_FirstClass: [Number],

    totalValueAdult_FirstClass: [Number],
    tariffValueAdult_FirstClass: [Number],
    taxValueAdult_FirstClass: [Number],
    ravValueAdult_FirstClass: [Number],
    numADT_FirstClass: [Number],

    totalValueInf_FirstClass: [Number],
    tariffValueInf_FirstClass: [Number],
    taxValueInf_FirstClass: [Number],
    ravValueInf_FirstClass: [Number],
    numINF_FirstClass: [Number],

    // Executivo
    totalValueCHD_Executive: [Number],
    tariffValueCHD_Executive: [Number],
    taxValueCHD_Executive: [Number],
    ravValueCHD_Executive: [Number],
    numCHD_Executive: [Number],

    totalValueAdult_Executive: [Number],
    tariffValueAdult_Executive: [Number],
    taxValueAdult_Executive: [Number],
    ravValueAdult_Executive: [Number],
    numADT_Executive: [Number],

    totalValueInf_Executive: [Number],
    tariffValueInf_Executive: [Number],
    taxValueInf_Executive: [Number],
    ravValueInf_Executive: [Number],
    numINF_Executive: [Number],

    // Econômico
    totalValueCHD_Economic: [Number],
    tariffValueCHD_Economic: [Number],
    taxValueCHD_Economic: [Number],
    ravValueCHD_Economic: [Number],
    numCHD_Economic: [Number],

    totalValueAdult_Economic: [Number],
    tariffValueAdult_Economic: [Number],
    taxValueAdult_Economic: [Number],
    ravValueAdult_Economic: [Number],
    numADT_Economic: [Number],

    totalValueInf_Economic: [Number],
    tariffValueInf_Economic: [Number],
    taxValueInf_Economic: [Number],
    ravValueInf_Economic: [Number],
    numINF_Economic: [Number],

    finalValue:[Number],
    escalas: [Number]


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

 static getByIdArray(id_array){
     return new Promise((resolve, reject)=> {
         FlightModel.find({ _id: {$in: id_array} }).then((flights)=>{
             resolve(flights);
         }).catch((err) => {
         reject(err);
       });
     })
 }

}

module.exports = Flight;
