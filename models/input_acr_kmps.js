'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class input_ACR_KMPS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  input_ACR_KMPS.init({
    fakultas: DataTypes.STRING,
    pn_jwb: DataTypes.STRING,
    no_wa: DataTypes.INTEGER,
    nm_acara: DataTypes.STRING,
    ruangan: DataTypes.INTEGER,
    tgl_mulai: DataTypes.DATE,
    tgl_selesai: DataTypes.INTEGER,
    jam_mulai: DataTypes.INTEGER,
    jam_selesai: DataTypes.INTEGER,
    ket: DataTypes.STRING,
    nm_propo: DataTypes.STRING,
    nm_srt_tmbsn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'input_ACR_KMPS',
  });
  return input_ACR_KMPS;
};