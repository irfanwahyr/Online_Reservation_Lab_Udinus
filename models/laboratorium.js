'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Laboratorium.init({
    id_software: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    jml_PC: DataTypes.INTEGER,
    jenis_lab: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Laboratorium',
  });
  return Laboratorium;
};