'use strict';

const { RSVP } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await RSVP.bulkCreate([
      {
        name: 'Shaista Shoulat',
        email: 'shaistashoukat97@gmail.com',
        phone: '347-825-5377',
        attendees: 1,
        adminId: 1,
      },
      {
        name: 'Hajra Shoulat',
        email: 'hajrashoukat@gmail.com',
        phone: '347-825-5377',
        attendees: 2,
        adminId: 1,
      },
      {
        name: 'Qutbia Shoulat',
        email: 'biax3@gmail.com',
        phone: '347-825-5377',
        attendees: 1,
        adminId: 1,
      },
    ], { validate: true });    
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'RSVPs';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      email: { [Op.in]: ['shaistashoukat97@gmail.com'] }
    }, {});
  }
};
