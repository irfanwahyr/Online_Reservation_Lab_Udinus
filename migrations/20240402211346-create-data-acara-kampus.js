'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Data_Acara_Kampus', {
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
      penanggung_jawab: {
        allowNull: false,
        type: Sequelize.STRING
      },
      no_whatsapp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nama_acara: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nama_lab: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tanggal_mulai: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tanggal_selesai: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jam_mulai: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jam_selesai: {
        allowNull: false,
        type: Sequelize.STRING
      },
      keterangan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      proposal_acara: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surat_peminjaman: {
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
    await queryInterface.dropTable('Data_Acara_Kampus');
  }
};