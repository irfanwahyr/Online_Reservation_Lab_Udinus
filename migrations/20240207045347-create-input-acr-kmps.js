'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('input_ACR_KMPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fakultas: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pn_jwb: {
        allowNull: false,
        type: Sequelize.STRING
      },
      no_wa: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nm_acara: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ruangan: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      tgl_mulai: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tgl_selesai: {
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
      nm_propo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nm_srt_tmbsn: {
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
    await queryInterface.dropTable('input_ACR_KMPs');
  }
};