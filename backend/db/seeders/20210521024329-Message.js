'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {userId: 1, hostId: 2, message: faker.lorem.paragraph()},
      {userId: 1, hostId: 3, message: faker.lorem.paragraph()},
      {userId: 1, hostId: 4, message: faker.lorem.paragraph()},
      {userId: 1, hostId: 5, message: faker.lorem.paragraph()},
      {userId: 2, hostId: 2, message: faker.lorem.paragraph()},
      {userId: 2, hostId: 3, message: faker.lorem.paragraph()},
      {userId: 2, hostId: 4, message: faker.lorem.paragraph()},
      {userId: 2, hostId: 5, message: faker.lorem.paragraph()},
      {userId: 3, hostId: 2, message: faker.lorem.paragraph()},
      {userId: 3, hostId: 3, message: faker.lorem.paragraph()},
      {userId: 3, hostId: 4, message: faker.lorem.paragraph()},
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
