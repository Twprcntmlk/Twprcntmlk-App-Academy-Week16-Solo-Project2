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
        {listingId:1,photo:"https://unsplash.com/photos/23o6jgXEPkk"},
        {listingId:1,photo:"https://unsplash.com/photos/FYTXE6l8VaE"},
        {listingId:1,photo:"https://unsplash.com/photos/f7fZg21B3ms"},
        {listingId:1,photo:"https://unsplash.com/photos/Dl6H4_nzBpE"},
        {listingId:1,photo:"https://unsplash.com/photos/JkTv__BqmaA"},
        {listingId:2,photo:"https://unsplash.com/photos/9uH-hM0VwPg"},
        {listingId:2,photo:"https://unsplash.com/photos/KTSYy-3XVSo"},
        {listingId:2,photo:"https://unsplash.com/photos/hrlvr2ZlUNk"},
        {listingId:2,photo:"https://unsplash.com/photos/aapSemzfsOk"},
        {listingId:2,photo:"https://unsplash.com/photos/x6vyL4YKP9c"},
        {listingId:3,photo:"https://unsplash.com/photos/sStahKEhT9w"},
        {listingId:3,photo:"https://unsplash.com/photos/uckPy5B7K4o"},
        {listingId:3,photo:"https://unsplash.com/photos/k8WL83m48XY"},
        {listingId:3,photo:"https://unsplash.com/photos/so3wgJLwDxo"},
        {listingId:3,photo:"https://unsplash.com/photos/VOWXF7lsAN0"},
        {listingId:4,photo:"https://unsplash.com/photos/hBh9JbyeCtg"},
        {listingId:4,photo:"https://unsplash.com/photos/0SSPeyokubs"},
        {listingId:4,photo:"https://unsplash.com/photos/1uNh3B3ppl4"},
        {listingId:4,photo:"https://unsplash.com/photos/NngNVT74o6s"},
        {listingId:4,photo:"https://unsplash.com/photos/cYCcdsTeZaA"},
        {listingId:5,photo:"https://unsplash.com/photos/_YxDGcDm4Hs"},
        {listingId:5,photo:"https://unsplash.com/photos/DhFHtkECn7Q"},
        {listingId:5,photo:"https://unsplash.com/photos/8DlbPCxfGHA"},
        {listingId:5,photo:"https://unsplash.com/photos/44f42VRbGQg"},
        {listingId:5,photo:"https://unsplash.com/photos/b87_egH5mos"},
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
