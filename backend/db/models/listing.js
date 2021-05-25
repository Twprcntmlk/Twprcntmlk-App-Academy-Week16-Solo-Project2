'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address:DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    price: DataTypes.INTEGER,
    guests: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    baths: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.belongsTo(models.User, {foreignKey: 'userId'});
    Listing.hasMany(models.Photo, {foreignKey: 'listingId'});
    Listing.hasMany(models.Review, {foreignKey: 'listingId'});
    Listing.hasMany(models.Reservation, {foreignKey: 'listingId'});
  };
  return Listing;
};
