'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kelas_Penggantis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_keperluan: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Keperluans',
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
    await queryInterface.dropTable('Kelas_Penggantis');
  }
};