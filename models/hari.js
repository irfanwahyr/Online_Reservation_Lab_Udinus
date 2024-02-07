'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hari extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hari.hasOne(models.Jadwal, {
        foreignKey: 'id_hari',
        as: 'jadwal'
      });
    }
  }
  Hari.init({
    nama_hari: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hari',
  });
  return Hari;
};