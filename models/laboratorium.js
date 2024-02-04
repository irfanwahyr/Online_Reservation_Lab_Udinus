'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorium extends Model {
    static associate(models) {
      // define association here
    }
  }
  Laboratorium.init({
    nama: DataTypes.STRING,
    jml_PC: DataTypes.INTEGER,
    jenis_lab: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Laboratorium',
  });
  return Laboratorium;
};
