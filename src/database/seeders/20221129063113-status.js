'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [{
      code: 1,
      name: 'Active',
      type: 'User',
      createdBy: '0',
      updatedBy: '0',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 0,
      name: 'In Active',
      type: 'User',
      createdBy: '0',
      updatedBy: '0',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 1,
      name: 'Active',
      type: 'Role',
      createdBy: '0',
      updatedBy: '0',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 0,
      name: 'In Active',
      type: 'Role',
      createdBy: '0',
      updatedBy: '0',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 1,
      name: 'Active',
      type: 'Permission',
      createdBy: '0',
      updatedBy: '0',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 0,
      name: 'In Active',
      type: 'Permission',
      createdBy: '0',
      updatedBy: '0',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
