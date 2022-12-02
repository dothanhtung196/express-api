'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [{
      name: 'Read',
      code: 'Users.Read',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Add',
      code: 'Users.Add',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Edit',
      code: 'Users.Edit',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Delete',
      code: 'Users.Delete',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Import',
      code: 'Users.Import',
      statusId: 5,
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0
    },
    {
      name: 'Export',
      code: 'Users.Export',
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
