'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const Abouts = require('../Datas/about.json')
   Abouts = Abouts.map(about =>{ 
    about.createdAt = about.updatedAt = new Date()
    return about
   })
   await queryInterface.bulkInsert('Abouts', Abouts)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Abouts', null, {})
  }
};
