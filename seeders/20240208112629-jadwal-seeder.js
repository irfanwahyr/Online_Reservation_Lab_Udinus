'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const currentDate = new Date();
    const jam = [
      "07.00",
      "07.50",
      "08.40",
      "09.30",
      "10.20",
      "11.10",
      "12.30",
      "13.20",
      "14.10",
      "15.00",
      "16.20",
      "17.10",
      "18.30",
      "19.20",
      "20.10",
      "21.00"
    ];

    const daysData = [];
    let id_hari = 1;
    let j = 0;
    let jam_mulai = "";
    let jam_selesai = "";

    for (let i = 0; i < 1170; i++) {
     if(j == 14){
        j = -1;
        jam_mulai = jam[14];
        jam_selesai = jam[15];
     } else {
        jam_mulai = jam[j];
        jam_selesai = jam[j+1];
     }

      daysData.push({
        kelompok: null,
        mata_kuliah: null,
        jam_mulai,
        jam_selesai,
        id_hari,
        id_pesan: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
      });

      j++;

      if (j % 15 == 0) {
        if (id_hari % 6 == 0) {
          id_hari = 1;
        } else {
          id_hari++;
        }
      }
    }

    return queryInterface.bulkInsert('jadwals', daysData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jadwals', null, {});
  }
};
