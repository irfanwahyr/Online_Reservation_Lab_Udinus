'use strict';

const software = require('../models/software');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Software', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      software_1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      software_2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      software_3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      software_4: {
        allowNull: false,
        type: Sequelize.STRING
      },
      software_5: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_lab: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Laboratoria',
          key: 'id'
        },
        allowNull: true
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
    await queryInterface.dropTable('Software');
  }
};