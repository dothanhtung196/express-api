'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [{
      name: 'Read',
      roleId: 1,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
