'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Software extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Software.belongsTo(models.Laboratorium, {
        foreignKey: 'id_lab',
        as: 'laboratorium',
      });
    }
  }
  Software.init({
    nama_software: DataTypes.STRING,
    versi: DataTypes.STRING,
    id_lab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Software',
  });
  return Software;
};