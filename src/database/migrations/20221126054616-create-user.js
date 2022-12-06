'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      fullName: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lastLoginIp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deleteFlag: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};