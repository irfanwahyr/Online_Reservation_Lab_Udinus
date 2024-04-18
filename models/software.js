'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Software extends Model {
    static associate(models) {
      // define association here
      Software.belongsTo(models.Laboratorium, {
        foreignKey: 'id_lab',
        as: 'laboratorium',
      });
    }
  }
  Software.init({
    software_1: DataTypes.STRING,
    software_2: DataTypes.STRING,
    software_3: DataTypes.STRING,
    software_4: DataTypes.STRING,
    software_5: DataTypes.STRING,
    id_lab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Software',
  });
  return Software;
};