'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PDF_filename extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PDF_filename.init({
    nama: DataTypes.STRING,
    is_proposal: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PDF_filename',
  });
  return PDF_filename;
};