'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hardware extends Model {

    static associate(models) {
      Hardware.belongsTo(models.Laboratorium, {
        foreignKey: 'id_lab',
        as: 'laboratorium',
      });
    }
  }
  Hardware.init({
    processor: DataTypes.STRING,
    ram: DataTypes.INTEGER,
    gpu: DataTypes.STRING,
    monitor: DataTypes.INTEGER,
    storage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hardware',
  });
  return Hardware;
};