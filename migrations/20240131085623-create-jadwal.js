'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jadwals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kelompok: {
        type: Sequelize.STRING,
      },
      mata_kuliah: {
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
      id_hari: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Haris',
          key: 'id'
        }
      },
      id_pesan: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pesans',
          key: 'id'
        }
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
    await queryInterface.dropTable('Jadwals');
  }
};