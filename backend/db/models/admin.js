'use strict';
const {
  Model, Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4, 50],
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4, 50],
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true,
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [60, 60],
      },
    }
  }, 
  {
      sequelize,
      modelName: 'Admin',
      defaultScope: {
        attributes: {
          exclude: ['passwordHash', 'email', 'createdAt', 'updatedAt'],
        },
      },
    }
  );
  return Admin;
};