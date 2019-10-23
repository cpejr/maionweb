const mongoose = require('mongoose');
const budgetSchema = new mongoose.Schema({


    responsable:String,
    companion1: [String],

    codFile: {
      type: String,
      //required: true
    },


    country: [String],

    airportGo: [String],
    airportReturn: [String],
    goDate : [String],
    returnDate : [String],

    cities: [String],

    // cities: [{
    //   city: [String],
    // }],
    //Roteiro page C
    date: [String],
    dayWeek: [String],
    city: [String],
    freeField: [String],
    scriptCountrie: [String],
    tips: [String],

    //Moeda usada
    coin: String,




      flights:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flight'
    },

    client:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client'
    },

      hotels:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'hotel'
    },


    trasnport:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transport'
    },

    cars:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    },

    safes:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Safe'
    },

    tickets:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket'
    },
    others: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Other'
    },

  totalValue:{
    type: Number
  },
  payment: {
    type: String
  },

  planDate: [Date],
  planCountry: [String],
  planCity: [String],
  planFreeField: [String]

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
  static addHotel(id, hotel) {
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
   * @param {string} flight - flight Id
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
  * Add car to budget
  * @param {string} id - budget Id
  * @param {string} car - car Id
  * @returns {null}
  */
  static addCar(id, car) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndUpdate(id, { $push: { cars: car } }).then(()=>{
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Add safe to budget
  * @param {string} id - budget Id
  * @param {string} safe - safe Id
  * @returns {null}
  */
  static addSafe(id, safe) {
    return new Promise((resolve, reject) => {
      BudgetModel.findByIdAndUpdate(id, { $push: { safes: safe } }).then(()=>{
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
    * Get the flight from a budget by its id
    * @param {string} budget_id - budget uid
    * @returns {Array} - Array of flights
    */
   static getAssociatedFlightById(id) {
     return new Promise((resolve, reject) => {
       BudgetModel.findById(id).populate({ path: 'flights' }).exec().then((result) => {
         resolve(result.flights);
       }).catch((err) => {
         reject(err);
       });
     });
    }

    /**
      * Get the hotel from a budget by its id
      * @param {string} budget_id - budget uid
      * @returns {Array} - Array of hotel
      */
     static getAssociatedHotelById(id) {
       return new Promise((resolve, reject) => {
         BudgetModel.findById(id).populate({ path: 'hotels' }).exec().then((result) => {
           resolve(result.hotels);
         }).catch((err) => {
           reject(err);
         });
       });
      }

      /**
        * Get the car from a budget by its id
        * @param {string} budget_id - budget uid
        * @returns {Array} - Array of car
        */
       static getAssociatedCarById(id) {
         return new Promise((resolve, reject) => {
           BudgetModel.findById(id).populate({ path: 'cars' }).exec().then((result) => {
             resolve(result.cars);
           }).catch((err) => {
             reject(err);
           });
         });
        }

        /**
          * Get the safe from a budget by its id
          * @param {string} budget_id - budget uid
          * @returns {Array} - Array of hotel
          */
         static getAssociatedSafeById(id) {
           return new Promise((resolve, reject) => {
             BudgetModel.findById(id).populate({ path: 'safes' }).exec().then((result) => {
               resolve(result.safes);
             }).catch((err) => {
               reject(err);
             });
           });
          }

          static motherClient(id, client) {
            return new Promise((resolve, reject) => {
              BudgetModel.findByIdAndUpdate(id, { $push: { client: client } }).then(()=>{
                resolve();
              }).catch((err) => {
                reject(err);
              });
            });
          }

}



module.exports = Budget;
