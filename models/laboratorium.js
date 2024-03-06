'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorium extends Model {
    static associate(models) {
      Laboratorium.hasMany(models.Software, {
        foreignKey: 'id_lab',
        as: 'software',
      });

      Laboratorium.hasMany(models.hardware, {
        foreignKey: 'id_lab',
        as: 'hardware',
      });

      Laboratorium.hasOne(models.Peminjaman, {
        foreignKey: 'id_lab',
        as: 'peminjaman'
      });
    }
  }
  Laboratorium.init({
    nama_lab: DataTypes.STRING,
    jumlah_pc: DataTypes.INTEGER,
    jenis_lab: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Laboratorium',
  });
  return Laboratorium;
};
