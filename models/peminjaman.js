'use strict';
const {
  Model
} = require('sequelize');
const keperluan = require('./keperluan');
module.exports = (sequelize, DataTypes) => {
  class Peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Peminjaman.belongsTo(models.Users, {
        foreignKey: 'id_user',
        as: 'user'
      });

      Peminjaman.belongsTo(models.Laboratorium, {
        foreignKey: 'id_lab',
        as: 'laboratorium'
      });

      Peminjaman.belongsTo(models.Keperluan, {
        foreignKey: 'id_keperluan',
        as: 'keperluan'
      });
    }
  }
  Peminjaman.init({
    id_user: DataTypes.INTEGER,
    id_lab: DataTypes.INTEGER,
    id_keperluan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peminjaman',
  });
  return Peminjaman;
};