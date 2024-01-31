'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pesan.init({
    status: DataTypes.INTEGER,
    id_jadwal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pesan',
  });
  return Pesan;
};