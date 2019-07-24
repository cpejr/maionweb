const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

  codClient: String,
  fullName: String,

  register: { //CPF
    type: String,
    //unique: false
  },

  phone: String, //residencial
  cellphone: String, //celular

  email: {
    type: String,
    lowercase: true
  },

  adress: String,
  id: String, //Número identidade, RG
  passportNumber: String,

  maritalStatus: { //Estado civil
    type: String,
    // enum: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'],
    default: 'Solteiro(a)'

  },

  spouseName: String, // Nome do conjuge
  children: String, //   filhos
  childrenAge: String,
  profession: String,
  spouseProfession: String,
  instagram: String,
  facebook: String,

  features: {
    perfil: String,
    averageBudget: String,
    travelPreferences: String,
    adeptResorts: String,
    travelClass: String,
    travelSeat: String,
    sports: String,
    foodPref: String,
    allergies: String


  },

  

}, { timestamps: true, static: false });

const ClientModel = mongoose.model('Client', clientSchema);

class Client {
  /**
   * Get all clients from database
   * @returns {Array} Array of clients
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      ClientModel.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Client by it's id
   * @param {string} id - Client Id
   * @returns {Object} - Client Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      ClientModel.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new Client
   * @param {Object} client - Client Document Data
   * @returns {string} - New Client Id
   */
  static create(client) {
    return new Promise((resolve, reject) => {
      ClientModel.create(client).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a Client
   * @param {string} id - Client Id
   * @param {Object} Client - Client Document Data
   * @returns {null}
   */

  static update(id, client) {
    return new Promise((resolve, reject) => {
      ClientModel.findByIdAndUpdate(id, client).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Client
  * @param {string} id - Client Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      ClientModel.findOneAndDelete({_id: id}).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = Client;
