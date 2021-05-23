'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [
      {name:faker.lorem.sentence(),description:faker.lorem.sentences(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),price:faker.datatype.number(1000),guests:faker.datatype.number(7),bedrooms:faker.datatype.number(7),baths:faker.datatype.number(7),hostId:1,},
      {name:faker.lorem.sentence(),description:faker.lorem.sentences(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),price:faker.datatype.number(1000),guests:faker.datatype.number(7),bedrooms:faker.datatype.number(7),baths:faker.datatype.number(7),hostId:2,},
      {name:faker.lorem.sentence(),description:faker.lorem.sentences(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),price:faker.datatype.number(1000),guests:faker.datatype.number(7),bedrooms:faker.datatype.number(7),baths:faker.datatype.number(7),hostId:3,},
      {name:faker.lorem.sentence(),description:faker.lorem.sentences(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),price:faker.datatype.number(1000),guests:faker.datatype.number(7),bedrooms:faker.datatype.number(7),baths:faker.datatype.number(7),hostId:4,},
      {name:faker.lorem.sentence(),description:faker.lorem.sentences(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),price:faker.datatype.number(1000),guests:faker.datatype.number(7),bedrooms:faker.datatype.number(7),baths:faker.datatype.number(7),hostId:5,},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
