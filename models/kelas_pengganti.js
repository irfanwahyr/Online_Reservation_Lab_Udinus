'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas_Pengganti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kelas_Pengganti.belongsTo(models.Keperluan, {
        foreignKey: 'id_keperluan',
        as: 'keperluan',
      });
      Kelas_Pengganti.belongsTo(models.Jadwal, {
        foreignKey: 'id_jadwal',
        as: 'jadwal',
      });
    }
  }
  Kelas_Pengganti.init({
    id_keperluan: DataTypes.INTEGER,
    id_jadwal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kelas_Pengganti',
  });
  return Kelas_Pengganti;
};