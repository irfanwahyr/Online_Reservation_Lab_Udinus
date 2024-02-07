'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class input_acr_lnya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  input_acr_lnya.init({
    keperluan: DataTypes.STRING,
    instansi: DataTypes.STRING,
    pn_jwb: DataTypes.STRING,
    no_wa: DataTypes.INTEGER,
    ruangan: DataTypes.CHAR,
    tgl_mulai: DataTypes.DATE,
    tgl_selesai: DataTypes.DATE,
    jam_mulai: DataTypes.INTEGER,
    jam_selesai: DataTypes.INTEGER,
    ket: DataTypes.STRING,
    nm_propo: DataTypes.STRING,
    nm_srt_tmbsn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'input_acr_lnya',
  });
  return input_acr_lnya;
};