'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    const keperluanData = [
      {
        nama_keperluan: 'kelas pengganti',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        nama_keperluan: 'acara organisasi',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        nama_keperluan: 'acara kampus',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ];

    return queryInterface.bulkInsert('keperluans', keperluanData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('keperluans', null, {});
  }
};
