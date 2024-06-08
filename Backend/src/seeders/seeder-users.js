"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "chanh@gmail.com",
        password: "12345",
        firstName: "Nguyen",
        lastName: "Chanh",
        address: "168 street 1",
        phoneNumber: "0393210730",
        gender: 1,
        image: "",
        roleId: "admin",
        positionId: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
