'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hosts', [
      {firstName:'HostUser',lastName:'HostUser',userName:faker.internet.userName(),imageUrl:faker.random.image(),email: 'host@user.com',address:faker.address.streetAddress(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),userName:faker.internet.userName(),imageUrl:faker.random.image("cats"),email:faker.internet.email(),address:faker.address.streetAddress(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),userName:faker.internet.userName(),imageUrl:faker.random.image("cats"),email:faker.internet.email(),address:faker.address.streetAddress(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),userName:faker.internet.userName(),imageUrl:faker.random.image("cats"),email:faker.internet.email(),address:faker.address.streetAddress(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),userName:faker.internet.userName(),imageUrl:faker.random.image("cats"),email:faker.internet.email(),address:faker.address.streetAddress(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),userName:faker.internet.userName(),imageUrl:faker.random.image("cats"),email:faker.internet.email(),address:faker.address.streetAddress(),hashedPassword: bcrypt.hashSync('password')},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Hosts', null, {});
  }
};
