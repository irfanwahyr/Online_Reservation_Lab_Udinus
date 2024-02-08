'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    const pesanData = [
      {
        status: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        status: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        status: 3,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        status: 4,
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
