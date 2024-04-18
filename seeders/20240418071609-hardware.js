'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const currentDate = new Date();

    const id_lab = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ];

    const processor = "Intel Core i7-10700K";
    const ram = 32;
    const gpu = "NVIDIA GeForce RTX 3080";
    const monitor = 1;
    const storage = "512 GB";

    const hardware = [];

    for (let i = 0; i < id_lab.length; i++){
      hardware.push({
        processor: processor,
        ram: ram,
        gpu: gpu,
        monitor: monitor,
        storage: storage,
        id_lab: id_lab[i],
        createdAt: currentDate,
        updatedAt: currentDate,
      })
    }
    return queryInterface.bulkInsert('hardware', hardware, {});
  },  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('hardware', null, {});
  }
};
