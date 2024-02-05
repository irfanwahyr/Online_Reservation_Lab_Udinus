'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keperluan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Keperluan.hasOne(models.Kelas_Pengganti, {
        foreignKey: 'id_keperluan',
        as: 'kelas_penggantis',
      });
    }
  }
  Keperluan.init({},
    {
    sequelize,
    modelName: 'Keperluan',
  });
  return Keperluan;
};