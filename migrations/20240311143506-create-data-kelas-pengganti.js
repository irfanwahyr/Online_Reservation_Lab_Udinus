'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Data_Kelas_Penggantis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_dosen: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mata_kuliah: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kelompok: {
        allowNull: false,
        type: Sequelize.STRING
      },
      no_whatsapp: {
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
      jam_mulai: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jam_selesai: {
        allowNull: false,
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      id_jadwal: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Jadwals',
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
    await queryInterface.dropTable('Data_Kelas_Penggantis');
  }
};