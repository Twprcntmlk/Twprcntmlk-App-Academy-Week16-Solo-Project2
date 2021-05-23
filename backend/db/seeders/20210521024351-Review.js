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
    return queryInterface.bulkInsert('Reviews', [
      {userId:1,listingId:5,review:faker.lorem.paragraph(),cleanliness:faker.datatype.number(5),communication:faker.datatype.number(5),checkIn:faker.datatype.number(5),accuracy:faker.datatype.number(5),location:faker.datatype.number(5),value:faker.datatype.number(5)},
      {userId:2,listingId:4,review:faker.lorem.paragraph(),cleanliness:faker.datatype.number(5),communication:faker.datatype.number(5),checkIn:faker.datatype.number(5),accuracy:faker.datatype.number(5),location:faker.datatype.number(5),value:faker.datatype.number(5)},
      {userId:3,listingId:3,review:faker.lorem.paragraph(),cleanliness:faker.datatype.number(5),communication:faker.datatype.number(5),checkIn:faker.datatype.number(5),accuracy:faker.datatype.number(5),location:faker.datatype.number(5),value:faker.datatype.number(5)},
      {userId:4,listingId:2,review:faker.lorem.paragraph(),cleanliness:faker.datatype.number(5),communication:faker.datatype.number(5),checkIn:faker.datatype.number(5),accuracy:faker.datatype.number(5),location:faker.datatype.number(5),value:faker.datatype.number(5)},
      {userId:5,listingId:1,review:faker.lorem.paragraph(),cleanliness:faker.datatype.number(5),communication:faker.datatype.number(5),checkIn:faker.datatype.number(5),accuracy:faker.datatype.number(5),location:faker.datatype.number(5),value:faker.datatype.number(5)},
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
