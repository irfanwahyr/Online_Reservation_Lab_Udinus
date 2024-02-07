'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class input_KP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  input_KP.init({
    nm_dosen: DataTypes.STRING,
    mt_Kuliah: DataTypes.STRING,
    kd_mk: DataTypes.STRING,
    no_wa: DataTypes.INTEGER,
    ruangan: DataTypes.INTEGER,
    tgl: DataTypes.DATE,
    jam_mulai: DataTypes.INTEGER,
    jam_selesai: DataTypes.INTEGER,
    ket: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'input_KP',
  });
  return input_KP;
};