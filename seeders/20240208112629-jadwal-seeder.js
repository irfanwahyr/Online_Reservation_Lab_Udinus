'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const currentDate = new Date();
    const jam_mulai = [
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
    ];

    const jam_selesai = [
      "07.50",
      "08.40",
      "09.30",
      "10.20",
      "11.10",
      "12.00",
      "13.20",
      "14.10",
      "15.00",
      "15.50",
      "17.10",
      "18.00",
      "19.20",
      "20.10",
      "21.00",
    ];

    const daysData = [];
    let id_hari = 1;
    let j = 0;
    let jam_mulai_index = "";
    let jam_selesai_index = "";

    for (let i = 0; i < 1170; i++) {
      jam_mulai_index = jam_mulai[j];
      jam_selesai_index = jam_selesai[j];
      
      daysData.push({
        kelompok: null,
        mata_kuliah: null,
        jam_mulai: jam_mulai_index,
        jam_selesai: jam_selesai_index,
        id_hari,
        id_pesan: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
      });
      
      if (j == 14) {
        if (id_hari % 6 == 0) {
          id_hari = 1;
        } else {
          id_hari++;
        }
      }
      j++;

      if(j == 15){
        j = 0;
      }
    }
    return queryInterface.bulkInsert('jadwals', daysData, {});
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jadwals', null, {});
  }
}