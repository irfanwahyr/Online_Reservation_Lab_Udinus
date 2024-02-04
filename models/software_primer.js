'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Software_Primer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Software_Primer.belongsToMany(models.Laboratorium, {
        through: 'lab_pakai',
        foreignKey: 'nama',
        as: 'laboratorium',
      });
    }
  }
  Software_Primer.init({
    nama: DataTypes.STRING,
    versi: DataTypes.STRING,
    lab_pakai: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Software_Primer',
  });
  return Software_Primer;
};