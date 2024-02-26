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
      Jadwal.hasOne(models.Kelas_Pengganti, {
        foreignKey: 'id_jadwal',
        as: 'kelas_pengganti'
      });

      Jadwal.belongsTo(models.Hari, {
        foreignKey: 'id_hari',
        as: 'hari'
      });
    }
  }
  Jadwal.init({
    kelompok: DataTypes.STRING,
    nama_jadwal: DataTypes.STRING,
    jam_mulai: DataTypes.INTEGER,
    jam_selesai: DataTypes.INTEGER,
    id_hari: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};