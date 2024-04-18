'use strict';

const { down } = require('./20240208112629-jadwal-seeder');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const currentDate = new Date();

    const nama_lab = [
      "A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N"
    ];
    const jenis_lab = [
      "MULTIMEDIA",
      "MULTIMEDIA",
      "MULTIMEDIA",
      "MULTIMEDIA",
      "PROGRAMMING",
      "STATISTIK",
      "STATISTIK",
      "MULTIMEDIA",
      "DESKTOP",
      "DESKTOP",
      "STATISTIK",
      "PROGRAMMING",
      "PROGRAMMING"
    ];

    const jumlah_pc = [
      41, 41, 42, 40, 40, 43, 43, 41, 40, 40, 40, 40, 40
    ]

    const data_lab = [];

    for (let i = 0; i < nama_lab.length; i++) {
      data_lab.push({
        nama_lab: nama_lab[i],
        jumlah_pc: jumlah_pc[i],
        jenis_lab: jenis_lab[i],
        createdAt: currentDate,
        updatedAt: currentDate,
      })
    }

    return queryInterface.bulkInsert('laboratoria', data_lab, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('laboratoria', null, {});
  }
};
