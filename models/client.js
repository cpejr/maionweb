const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

  profile_need: {
    need: [],
    other_need: String,
  },
  profile_type: {
    type: [],
    other_type: String,
  },
  profile_hotel: {
    hotel: [],
    other_hotel: String,
  },
  profile_resort: [],
  profile_sports: {
    sports: [],
    other_sports: String,
  },
  profile_food_diet: {
    diet: [],
    other_diet: String,
  },
  profile_smoke: [],
  profile_allergy: {
    which_allergy: String,
    allergy: [],
  },
  profile_disabled_person:{
    which_disable: String,
    disable: [],
  },
  profile_food: {
    which_food: String,
    restriction: [],
  },

  codClient: String,
  fullName: String,

  register: { //CPF
    type: String,
    //unique: false
  },

  //phone
  phoneFixed: String,
  phoneCell: String,
  phoneOthers: String,

  email: [{
      type: String,
      lowercase: true
    }],

    email1: [{
      type: String,
      lowercase: true
    }],

  adress: String,
  adress: String,

  //Número identidade, RG
  id: String,
  rgUf: String,
  rgNumber: String,


  maritalStatus: { //Estado civil
    type: String,
    // enum: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'],
    default: 'Solteiro(a)'
  },

  //Passaporte
  passport: String,
  passportValidation: String,
  profession: String,

  //conjuge
  spouseName: String, // Nome do conjuge
  wedding_anniversary: String, //aniversario de Casamento
  spouseProfession: String, //profissao do conjuge
  spousePassport: String, //passaporte do conjuge
  spousePassportValidation: String, //validade do passaporte do conjuge
  spouseEmail: String,

  //filhos
  children: [String],
  birthDateChildren: [String],
  childrenPassport: [String],
  childrenPassportValidation: [String],

  //acompanhantes
  companionFullname: [String],
  companionEmail: [String],
  companionCellphone: [String],
  companionPassport: [String],
  companionPassportValidation: [String],

  //redes sociais
  instagram: String,
  facebook: String,
  plane_classs: String,
  plane_seat_pref:String,
  others: String,

  profile: String,
  averageBudget: String,
  travelPreferences: String,
  adeptResorts: String,
  travelClass: String,
  travelSeat: String,
  sports: String,
  foodPref: String,
  allergies: String,

  fullname: String,
  birthDate: Date,
  birthDateSpouse: Date,
  birthDateCompanion: [Date],

  type: {
    type: String,
    enum: ['Admin', 'Funcionario'],
    default: 'Funcionario'
  },

  register: {
    type: String, // CPF
    unique: true
  },

  //endereço
  street: String, //rua
  neighbourhood: String, //bairro
  complement: String, //complemento
  city: String, //cidade
  zipcode: String, //cep
  state: String, //estado

  email: {
    type: String,
    lowercase: true
  },

  phone: String, //residencial
  cellphone: String, //celular
  cellphone1: String,
  phoneFamily: String,
  pis: String,
  workPermit: String, //Carteria de Trabalho

  budgets:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget'}]
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


 /**
  * Add flight to clients
  * @param {string} id - client Id
  * @param {string} flight - flight Id
  * @returns {null}
  */
 static addFlight(id, flight) {
   return new Promise((resolve, reject) => {
     ClientModel.findByIdAndUpdate(id, { $push: { flights: flight } }).catch((err) => {
       reject(err);
     });
   });
 }

 /**
  * Add budget to clients
  * @param {string} id - client Id
  * @param {string} budget - budget Id
  * @returns {null}
  */
 static addBudget(id, budget) {
   return new Promise((resolve, reject) => {
     ClientModel.findByIdAndUpdate(id, { $push: { budgets: budget } }).then(()=>{
       resolve();
     }).catch((err) => {
       reject(err);
     });
   });
 }
}

module.exports = Client;
