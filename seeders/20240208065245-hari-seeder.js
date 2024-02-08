'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    const daysData = [
      {
        nama_hari: 'senin',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        nama_hari: 'selasa',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        nama_hari: 'rabu',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        nama_hari: 'kamis',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        nama_hari: 'jumat',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        nama_hari: 'sabtu',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ];

    return queryInterface.bulkInsert('haris', daysData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('haris', null, {});
  }
};
