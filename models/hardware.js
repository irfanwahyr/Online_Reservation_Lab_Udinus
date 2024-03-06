'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hardware extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hardware.belongsTo(models.Laboratorium, {
        foreignKey: 'id_lab',
        as: 'laboratorium',
      });
    }
  }
  hardware.init({
    processor: DataTypes.STRING,
    ram: DataTypes.INTEGER,
    gpu: DataTypes.STRING,
    monitor: DataTypes.INTEGER,
    storage: DataTypes.STRING,
    id_lab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hardware',
  });
  return hardware;
};