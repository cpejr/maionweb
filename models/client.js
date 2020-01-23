const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

  codClient: String,
  fullName: String,

  register: { //CPF
    type: String,
    unique: true
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
  funil: String,
  instagram: String,
  facebook: String,
  others: String,

  profile: String,
  travelPreferences: String,
  adeptResorts: String,
  travelClass: String,
  travelSeat: String,
  sports: String,
  foodPref: String,
  allergies: String,

  fullname: String,
  birthDate: String,
  birthDateSpouse: String,
  birthDateCompanion: [String],

  register: {
    type: String, // CPF
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
    ref: 'Budget'}],

  //Necessidades - início
  profile_Status: String,
  profile_Conhecimento: String,
  profile_NovasExperiencias: String,
  profile_Diversao: String,
  profile_BemEstar: String,
  profile_Exclusividade: String,
  profile_OtherNeed: String,
  //Necessidades - fim

  //Perfil - início
  profile_Esporte: String,
  profile_Refinado: String,
  profile_Simples: String,
  profile_Cult: String,
  profile_Comida: String,
  profile_Vinhos: String,
  profile_OtherType: String,
  //Perfil - fim

  //Hotéis - início
  profile_Contemporaneo: String,
  profile_Classico: String,
  profile_Boutique: String,
  profile_HotelSimples: String,
  profile_AndarAlto: String,
  profile_AndarBaixo: String,
  profile_OtherHotel: String,
  //Hotéis - fim

  //Adepto à resorts - início
  profile_ResortSim: String,
  profile_ResortNao: String,
  profile_ResortTalvez: String,
  //Adepto à resorts - fim

  // Budget mínimo - início
  average_Budget: String,
  // Budget mínimo - fim

  // Classe do avião - início
  plane_class: String,
  // Classe do avião - fim

  // Preferência de assento - início
  plane_seat_pref:String,
  // Preferência de assento - fim

  //Esportes - início
  profile_Corrida: String,
  profile_Bike: String,
  profile_Natação: String,
  profile_CoriidaCarro: String,
  profile_Musculação: String,
  profile_Pesca: String,
  profile_Mergulho: String,
  profile_Golf: String,
  profile_Tênis: String,
  profile_OtherSports: String,
  //Esportes - fim

  //Gastronomia - início
  profile_Italiana: String,
  profile_Japonesa: String,
  profile_Mediterrânea: String,
  profile_Indiana: String,
  profile_Asiática: String,
  profile_Francesa: String,
  profile_FrutosDoMar: String,
  profile_Carnes: String,
  profile_OtherDiet: String,
  //Gastronomia - início

  //Fumante - início
  profile_SmokeSim: String,
  profile_SmokeNão: String,
  //Fumante - fim

  //Alergia - início
  profile_AllergySim: String,
  profile_AllergyNão: String,
  profile_WhichAllergy: String,
  //Alergia - fim

  //Dificuldade de locomoção - início
  profile_DisableSim: String,
  profile_DisableNão: String,
  profile_WhichDisable: String,
  //Dificuldade de locomoção - início

  //Restrição alimentar - início
  profile_FoodSim: String,
  profile_FoodNão: String,
  profile_FoodVegano: String,
  profile_FoodVegetariano: String,
  profile_WhichFood: String,
  //Restrição alimentar - fim

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

 /**
   * Get the flight from a budget by its id
   * @param {string} budget_id - budget uid
   * @returns {Array} - Array of flights
   */
  static getAllBudgetsById(id) {
    return new Promise((resolve, reject) => {
      ClientModel.findById(id).populate({ path: 'budgets' }).exec().then((result) => {
        resolve(result.budgets);
      }).catch((err) => {
        reject(err);
      });
    });
   }

}

module.exports = Client;
