'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Acara_Kampus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_Acara_Kampus.init({
    fakultas: DataTypes.STRING,
    penanggung_jawab: DataTypes.STRING,
    no_whatsapp: DataTypes.STRING,
    nama_acara: DataTypes.STRING,
    nama_lab: DataTypes.STRING,
    tanggal_mulai: DataTypes.STRING,
    tanggal_selesai: DataTypes.STRING,
    jam_mulai: DataTypes.STRING,
    jam_selesai: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    proposal_acara: DataTypes.STRING,
    surat_peminjaman: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Data_Acara_Kampus',
  });
  return Data_Acara_Kampus;
};