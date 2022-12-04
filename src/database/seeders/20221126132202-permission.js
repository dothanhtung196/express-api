'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [{
      name: 'Read',
      code: 'read',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Add',
      code: 'add',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Edit',
      code: 'edit',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Delete',
      code: 'delete',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Import',
      code: 'import',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Export',
      code: 'export',
      statusId: 5,
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
