'use strict';

const { Admin } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Admin.bulkCreate([
      {
        firstName: 'Mariam',
        lastName: 'Shoukat-Aziz',
        email: 'laiba.junk1@gmail.com',
        username: 'mariamaziz0430',
        hashedPassword: bcrypt.hashSync('msa0430')
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Admins';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['mariamaziz0430'] }
    }, {});
  }
};
