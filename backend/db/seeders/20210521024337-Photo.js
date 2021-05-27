'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Photos', [
        {listingId:1,photo:faker.random.image("city")},
        {listingId:1,photo:faker.random.image("city")},
        {listingId:1,photo:faker.random.image("city")},
        {listingId:1,photo:faker.random.image("city")},
        {listingId:1,photo:faker.random.image("city")},
        {listingId:2,photo:faker.random.image("city")},
        {listingId:2,photo:faker.random.image("city")},
        {listingId:2,photo:faker.random.image("city")},
        {listingId:2,photo:faker.random.image("city")},
        {listingId:2,photo:faker.random.image("city")},
        {listingId:3,photo:faker.random.image("city")},
        {listingId:3,photo:faker.random.image("city")},
        {listingId:3,photo:faker.random.image("city")},
        {listingId:3,photo:faker.random.image("city")},
        {listingId:3,photo:faker.random.image("city")},
        {listingId:4,photo:faker.random.image("city")},
        {listingId:4,photo:faker.random.image("city")},
        {listingId:4,photo:faker.random.image("city")},
        {listingId:4,photo:faker.random.image("city")},
        {listingId:4,photo:faker.random.image("city")},
        {listingId:5,photo:faker.random.image("city")},
        {listingId:5,photo:faker.random.image("city")},
        {listingId:5,photo:faker.random.image("city")},
        {listingId:5,photo:faker.random.image("city")},
        {listingId:5,photo:faker.random.image("city")},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Photos', null, {});
  }
};
