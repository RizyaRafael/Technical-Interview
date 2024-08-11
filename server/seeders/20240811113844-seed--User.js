'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    let users = require("../Datas/users.json")
    users = users.map(user =>{ 
      user.createdAt = user.updatedAt = new Date()
      return user
    })
    await queryInterface.bulkInsert("Users", users)
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {})
  }
};
