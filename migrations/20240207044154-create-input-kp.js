'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('input_KPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nm_dosen: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mt_Kuliah: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kd_mk: {
        allowNull: false,
        type: Sequelize.STRING
      },
      no_wa: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ruangan: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      tgl: {
        allowNull: false,
        type: Sequelize.DATE
      },
      jam_mulai: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      jam_selesai: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ket: {
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
    await queryInterface.dropTable('input_KPs');
  }
};