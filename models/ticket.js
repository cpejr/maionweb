const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({

  clientList: [String],
  freeField: String,
  adt: Number,
  chd: Number,
  inf: Number,
  totalTickets: Number


}, { timestamps: true, static: false });

const TicketSchema = mongoose.model('Ticket', ticketSchema);

class Ticket {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      TicketSchema.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Ticket by it's id
   * @param {string} id - Ticket Id
   * @returns {Object} - Ticket Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      TicketSchema.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} ticket - User Document Data
   * @returns {string} - New User Id
   */
  static create(ticket) {
    return new Promise((resolve, reject) => {
      TicketSchema.create(ticket).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} ticket - User Document Data
   * @returns {null}
   */
  static update(id, ticket) {
    return new Promise((resolve, reject) => {
      TicketSchema.findByIdAndUpdate(id, ticket).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Ticket
  * @param {string} id - Ticket Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      TicketSchema.findByIdAndDelete(id).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }

}

module.exports = Ticket;
