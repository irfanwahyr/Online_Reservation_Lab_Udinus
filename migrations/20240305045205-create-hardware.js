'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hardware', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      processor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ram: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      gpu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      monitor: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      keyboard: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mouse: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      storage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hardware');
  }
};