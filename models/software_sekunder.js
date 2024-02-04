'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Software_Sekunder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Software_Sekunder.belongsToMany(models.Laboratorium, {
        through: 'lab_pakai',
        foreignKey: 'nama',
        as: 'laboratorium',
      });
    }
  }
  Software_Sekunder.init({
    nama: DataTypes.STRING,
    versi: DataTypes.STRING,
    lab_pakai: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Software_Sekunder',
  });
  return Software_Sekunder;
};