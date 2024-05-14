'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Riwayat_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Data_Riwayat_User.belongsTo(models.Jadwal, {
        foreignKey: 'id_jadwal',
        as: 'jadwal'
      });
    }
  }
  Data_Riwayat_User.init({
    nama_acara: DataTypes.STRING,
    nama_lab: DataTypes.STRING,
    tanggal_mulai: DataTypes.STRING,
    tanggal_selesai: DataTypes.STRING,
    jam_mulai: DataTypes.STRING,
    jam_selesai: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    alasan: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_jadwal: DataTypes.INTEGER,
    flag: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Data_Riwayat_User',
  });
  return Data_Riwayat_User;
};