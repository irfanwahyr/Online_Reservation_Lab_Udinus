'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorium extends Model {
    static associate(models) {
      Laboratorium.hasMany(models.Software_Primer, {
        foreignKey: 'id_lab',
        as: 'software_primers',
      });

      Laboratorium.hasMany(models.Software_Sekunder, {
        foreignKey: 'id_lab',
        as: 'software_sekunders',
      });

      Laboratorium.hasOne(models.Peminjaman, {
        foreignKey: 'id_lab',
        as: 'peminjaman'
      });
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
