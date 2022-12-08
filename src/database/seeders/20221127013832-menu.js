"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Menus",
            [
                {
                    roleId: "1",
                    code: "authentications",
                    name: "Authentications",
                    statusId: 1,
                    createdBy: 0,
                    updatedBy: 0,
                },
                {
                    roleId: "1",
                    code: "users",
                    name: "Users",
                    statusId: 1,
                    createdBy: 0,
                    updatedBy: 0,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Menus", null, {});
    },
};
