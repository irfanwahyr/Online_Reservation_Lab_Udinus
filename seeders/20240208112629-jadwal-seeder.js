'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const currentDate = new Date();

    // Data yang akan diinsert
    const daysData = [];
    let id_hari = 1;
    let j = 1;

    for (let i = 1; i <= 1170; i++) {
      const jam_mulai = j;
      const jam_selesai = j;

      daysData.push({
        kelompok: null,
        nama_jadwal: null,
        jam_mulai,
        jam_selesai,
        id_hari,
        createdAt: currentDate,
        updatedAt: currentDate,
      });

      if(j === 15){
        j = 0;
      }
      j++;


      if (i % 15 === 0) {
        id_hari = (id_hari % 6) + 1;
      }
    }

    return queryInterface.bulkInsert('jadwals', daysData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Hapus semua data dari tabel 'jadwals'
    return queryInterface.bulkDelete('jadwals', null, {});
  }
};
