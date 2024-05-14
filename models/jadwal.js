'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Jadwal.hasOne(models.Kelas_Pengganti, {
      //   foreignKey: 'id_jadwal',
      //   as: 'kelas_pengganti'
      // });

      Jadwal.belongsTo(models.Hari, {
        foreignKey: 'id_hari',
        as: 'hari'
      });

      Jadwal.hasOne(models.Data_Riwayat_User, {
        foreignKey: 'id',
        as: 'id_jadwal'
      }
      )
    }
  }
  Jadwal.init({
    kelompok: DataTypes.STRING,
    mata_kuliah: DataTypes.STRING,
    jam_mulai: DataTypes.STRING,
    jam_selesai: DataTypes.STRING,
    id_hari: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};