'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {userId: 1, hostId: 2, message: "#1 Yo What Up?"},
      {userId: 2, hostId: 1, message: "#2 Nothing B jsut Watching the Game Having a Bud"},
      {userId: 2, hostId: 1, message: "#3 What About You B?"},
      {userId: 1, hostId: 2, message: "#4 Watching the Game Having a Bud"},
      {userId: 2, hostId: 1, message: "#5 True True"},
      {userId: 1, hostId: 2, message: "#6 WAzzz UP!!!"},
      {userId: 2, hostId: 1, message: "#7 WAzzzZZ UP!!!"},
      {userId: 2, hostId: 1, message: "WAzzWZZz UP!!!"},
      {userId: 1, hostId: 2, message: "WAzzZZZz UP!!!"},
      {userId: 2, hostId: 2, message: "WAzzZZZZZZz UP!!!"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Messages', null, {});
  }
};
