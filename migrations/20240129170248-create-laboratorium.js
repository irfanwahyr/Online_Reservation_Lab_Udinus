'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Laboratoria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_software: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jml_PC: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      jenis_lab: {
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
    await queryInterface.dropTable('Laboratoria');
  }
};