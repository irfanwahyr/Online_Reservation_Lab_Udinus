'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    const pesanData = [
      {
        status: "Reservasi",
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        status: "Batalkan",
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        status: "Diproses",
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ];

    return queryInterface.bulkInsert('pesans', pesanData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pesans', null, {});
  }
};
