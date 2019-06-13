const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({

  file: {
    codFile: {
      codClient: String,
      counter: Number,
      year: String
    },

    responsibleTravel: String,
    companion: [String],
    countries: [{
      cities: [String]
    }],

    shipmentDate : Date,
    returnDate : Date,
    airportExit: String,
    airportArrival: String,

    scripts: {
      day:[{
        date: Date,
        dayWeek: String,
        city: String,
        freeField: String,
        tips: String

      }],
      typeTravel: {
        type: String,
        enum: ['Praia', 'Metropole', 'Campo', 'SKY', 'Outro']
      }
    }
  },

  air:{
    clientList: [String],
    flight:{
      from:String,
      dateFrom:Date,
      hourFrom: String,
      destination:String,
      dateDestination: Date,
      hourDestination: String,
      totalFlight: Number,
      adult:{
        value: Number,
        chd: String,
        inf: String
      },
      txEmb:{
        value: Number,
        chd: String,
        inf: String
      },
      rav:{
        value: Float,
        chd: String,
        inf: String
      }
    }
  },

  hotel: {
    clientList: [String],
    city: [String],
    option:[{
      hotel: String,
      valueApt: Number,
      numberDaily: Number,
      numberApt: Number,
      total: Number
    }],
    food: {
      type: String,
      enum: ['Café', 'Meia Pensão', 'All Inclusive', 'Outro']
    },
    food: {
      type: String,
      enum: ['Café', 'Meia Pensão', 'All Inclusive', 'Outro']
    },
    cancellationPeriod: {
      type: String,
      enum: ['Sem Prazo', 'Com Prazo', 'Outro']
    }

  },

  transportCar:{
    clientList: String,
    trans:[{
      from:String,
      dateFrom:Date,
      hourFrom: String,
      destination:String,
      dateDestination:Date,
      hourDestination: String,
      totalTrans: Float
    }],

    car:[{
      city: String,
      typeCar: String,
      shift:{
        type: String,
        enum:['Manual', 'Automático']
      },
      safe: String,
      outhers: String,
      withdrawal: String,
      delivery: String,
      totalCar: FLoat
    }]
  },

  services:{
    clientList: String,
    safe:{
      freeField: String,
      adt: Float,
      chd: Float,
      inf: Float,
      totalSafe: Float
    },
    tickets:{
      clientList: String,
      freeField: String,
      adt: Float,
      chd: Float,
      inf: Float,
      totalTickets: Float
    },
    outhers: {
      clientList: String,
      freeField: String,
      adt: Float,
      chd: Float,
      inf: Float,
      totalOthers: Float
    }

  },

  // responsavelViagemEacompanhantes:[{
  // type: mongoose.Schema.Types.ObjectId,
  // ref: 'Client'
  // }],

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
  static create(Budget) {
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
   * @param {Object} Budget - User Document Data
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
      BudgetModel.findOneAndDelete({_id: id}).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = Budget;
