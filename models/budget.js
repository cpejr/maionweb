const mongoose = require('mongoose');
const budgetSchema = new mongoose.Schema({

  clientList: {
    responsable:String,
    companion1: [String]
  },
  file: {
    codFile: {
      type: String,
      //required: true
    },
    responsibleTravel: String,
    companion: [{
      name: String,
      age: String
    }],
    location: [{
      country: String,
      cities: [String]
    }],

    goDate : String,
    returnDate : String,
    airportGo: String,
    airportArrival: String,
    scripts: {
      day:[{
        date: String,
        dayWeek: String,
        city: String,
        freeField: String,
        tips: String
      }],
      typeTravel: {
        type: String,
        //enum: ['Praia', 'Metropole', 'Campo', 'SKY', 'Outro']
      }
    }
  },


      flights:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flight'
    }],

    client:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client'
    },

      hotels:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel'
    }],

  transportCar:{
    trasnport:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transport'
    }],
    car:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    }]
  },
  services:{
    safes:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Safe'
    }],
    tickets:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket'
    }],
    others: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Other'
    }]
  },
  totalValue:{
    type: Number
  },
  payment: {
    type: String
  }

}, { timestamps: true, static: false });
const BudgetModel = mongoose.model('Budget', budgetSchema);
class Budget {
  /**
  * Get all Users from database
  * @returns {Array} Array of Users
  */
  static getAll() {
    return new Promise((resolve, reject) => {
      BudgetModel.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  /**
  * Get a Budget by it's id
  * @param {string} id - Budget Id
  * @returns {Object} - Budget Document Data
  */
  static getById(id) {
    return new Promise((resolve, reject) => {
      BudgetModel.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  /**

   * Create a new User
   * @param {Object} budget - User Document Data
   * @returns {string} - New User Id
   */

  static create(budget) {
    return new Promise((resolve, reject) => {
      BudgetModel.create(budget).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  /**
  * Update a User
  * @param {string} id - User Id
  * @param {Object} budget - User Document Data
  * @returns {null}
  */
  static update(id, budget) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndUpdate(id, budget).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }
  /**
  * Delete a Budget
  * @param {string} id - Budget Id
  * @returns {null}
  */
  static delete(id) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }
  // /**
  //  * Add client to budget
  //  * @param {string} id - client Id
  //  * @param {string} flight - budget Id
  //  * @returns {null}
  //  */
  // static addFlight(id, flight) {
  //   return new Promise((resolve, reject) => {
  //     ClientModel.findByIdAndUpdate(id, { $push: { flights: flight } }).catch((err) => {
  //       reject(err);
  //     });
  //   });
  // }
  /**
  * Add flight to budget
  * @param {string} id - budget Id
  * @param {string} budget - flight Id
  * @returns {null}
  */
  static addFlight(id, flight) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndUpdate(id, { $push: { flights: flight } }).then(()=>{
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }
  /**
  * Add hotel to budget
  * @param {string} id - budget Id
  * @param {string} budget - hotel Id
  * @returns {null}
  */
  static addHotel(id, Hotel) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndUpdate(id, { $push: { hotels: hotel } }).then(()=>{
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }



  // /**
  //  * Add client to budget
  //  * @param {string} id - client Id
  //  * @param {string} flight - budget Id
  //  * @returns {null}
  //  */
  // static addFlight(id, flight) {
  //   return new Promise((resolve, reject) => {
  //     ClientModel.findByIdAndUpdate(id, { $push: { flights: flight } }).catch((err) => {
  //       reject(err);
  //     });
  //   });
  // }

  /**
   * Add flight to budget
   * @param {string} id - budget Id
   * @param {string} budget - flight Id
   * @returns {null}
   */
  static addFlight(id, flight) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndUpdate(id, { $push: { flights: flight } }).then(()=>{
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Add hotel to budget
   * @param {string} id - budget Id
   * @param {string} budget - hotel Id
   * @returns {null}
   */
  static addHotel(id, Hotel) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndUpdate(id, { $push: { hotels: hotel } }).then(()=>{
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }



}



module.exports = Budget;
