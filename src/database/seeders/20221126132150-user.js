'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSaltSync(10);

    await queryInterface.bulkInsert('Users', [{
      username: 'administrator',
      password: await bcrypt.hashSync('Dtt@123456', salt),
      fullName: 'do thanh tung',
      phone: '0987654321',
      email: 'example@example.com',
      address: '',
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
