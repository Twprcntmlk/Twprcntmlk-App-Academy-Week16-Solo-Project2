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
      return queryInterface.bulkInsert('Reservations', [
        {userId:1,listingId:5,checkInDate:faker.date.between('2021-05-01', '2021-05-05'),checkOutDate:faker.date.between('2021-05-06', '2021-05-30')},
        {userId:2,listingId:4,checkInDate:faker.date.between('2021-05-01', '2021-05-05'),checkOutDate:faker.date.between('2021-05-06', '2021-05-30')},
        {userId:3,listingId:3,checkInDate:faker.date.between('2021-05-01', '2021-05-05'),checkOutDate:faker.date.between('2021-05-06', '2021-05-30')},
        {userId:4,listingId:2,checkInDate:faker.date.between('2021-05-01', '2021-05-05'),checkOutDate:faker.date.between('2021-05-06', '2021-05-30')},
        {userId:5,listingId:1,checkInDate:faker.date.between('2021-05-01', '2021-05-05'),checkOutDate:faker.date.between('2021-05-06', '2021-05-30')},

         ], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Reservations', null, {});
  }
};

// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-6-10",checkOutDate:"2021-6-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-8-10",checkOutDate:"2021-8-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-12-10",checkOutDate:"2021-12-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-10-10",checkOutDate:"2021-10-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-1-10",checkOutDate:"2021-1-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-2-10",checkOutDate:"2021-2-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-3-10",checkOutDate:"2021-3-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-8-10",checkOutDate:"2021-11-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-7-10",checkOutDate:"2021-9-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-7-10",checkOutDate:"2021-8-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-9-10",checkOutDate:"2021-9-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-11-10",checkOutDate:"2021-11-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-11-10",checkOutDate:"2021-11-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-3-10",checkOutDate:"2021-3-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-3-10",checkOutDate:"2021-3-17"},
// {userId:faker.datatype.number(50),listingId:faker.datatype.number(50),checkInDate:"2021-8-10",checkOutDate:"2021-8-17"},
