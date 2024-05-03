'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Kelas_Pengganti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_Kelas_Pengganti.init({
    nama_dosen: DataTypes.STRING,
    mata_kuliah: DataTypes.STRING,
    kelompok: DataTypes.STRING,
    no_whatsapp: DataTypes.STRING,
    nama_lab: DataTypes.STRING,
    tanggal_mulai: DataTypes.STRING,
    jam_mulai: DataTypes.STRING,
    jam_selesai: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_jadwal: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Data_Kelas_Pengganti',
  });
  return Data_Kelas_Pengganti;
};