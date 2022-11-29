'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [{
      name: 'Read',
      roleId: 1,
      code: '',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Add',
      roleId: 1,
      code: '',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Edit',
      roleId: 1,
      code: '',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Delete',
      roleId: 1,
      code: '',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Import',
      roleId: 1,
      code: '',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Export',
      roleId: 1,
      code: '',
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
