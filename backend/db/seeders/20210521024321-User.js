'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {firstName:'DemoUser',lastName:'DemoUser',username:'DemoUser',imageUrl:faker.random.image(),email: 'demo@user.com',address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:'HostUser',lastName:'HostUser',userName:'HostUser',imageUrl:faker.random.image(),email: 'host@user.com',address:faker.address.streetAddress(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),username:faker.internet.userName(),imageUrl:faker.random.image("people"),email:faker.internet.email(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),username:faker.internet.userName(),imageUrl:faker.random.image("people"),email:faker.internet.email(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),username:faker.internet.userName(),imageUrl:faker.random.image("people"),email:faker.internet.email(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),username:faker.internet.userName(),imageUrl:faker.random.image("people"),email:faker.internet.email(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),hashedPassword: bcrypt.hashSync('password')},
      {firstName:faker.name.firstName(),lastName:faker.name.lastName(),username:faker.internet.userName(),imageUrl:faker.random.image("people"),email:faker.internet.email(),address:faker.address.streetAddress(),latitude:faker.address.latitude(),longitude:faker.address.longitude(),hashedPassword: bcrypt.hashSync('password')},

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});
  }
};
