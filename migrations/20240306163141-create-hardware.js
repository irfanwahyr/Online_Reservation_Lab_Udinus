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
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.INTEGER
      },
      gpu: {
        type: Sequelize.STRING
      },
      monitor: {
        type: Sequelize.INTEGER
      },
      storage: {
        type: Sequelize.STRING
      },
      id_lab: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Laboratoria',
          key: 'id'
        },
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