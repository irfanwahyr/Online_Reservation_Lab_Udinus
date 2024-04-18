'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const currentDate = new Date();

    const id_lab = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ];

    const nama_software = [
      "windows", "microsoft office", "adobe photoshop", "adobe illustrator", "adobe premiere",
    ];

    const software = [];

    for (let i = 0; i < id_lab.length; i++) {
      software.push({
        id_lab: id_lab[i],
        software_1: nama_software[0],
        software_2: nama_software[1],
        software_3: nama_software[2],
        software_4: nama_software[3],
        software_5: nama_software[4],
        createdAt: currentDate,
        updatedAt: currentDate,
      })
    }

    return queryInterface.bulkInsert('software', software, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('software', null, {});
  }
};
