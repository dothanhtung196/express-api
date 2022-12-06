'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSaltSync(10);

    await queryInterface.bulkInsert('Users', [{
      username: 'administrator',
      password: await bcrypt.hashSync('admin@123456', salt),
      fullName: 'Administrator',
      phone: '0987654321',
      email: 'admin@admin.com',
      address: '',
      statusId: 1,
      lastLoginIp: '',
      deleteFlag: false,
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
