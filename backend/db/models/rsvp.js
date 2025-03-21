'use strict';

const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RSVP extends Model {
    static associate(models) {
      // define association here
      RSVP.belongsTo(models.Admin, {
        foreignKey: "adminId",
        onDelete: "CASCADE",
      });
    }
  }
  RSVP.init({
    adminId: {
      type: DataTypes.INTEGER,
    allowNull: false
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attendees: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'RSVP',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  return RSVP;
};