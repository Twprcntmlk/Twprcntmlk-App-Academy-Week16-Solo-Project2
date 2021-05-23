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
    hostId: DataTypes.INTEGER
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.belongsTo(models.Host, {foreignKey: 'hostId'});
    Listing.hasMany(models.Photo, {foreignKey: 'listingId'});
    Listing.hasMany(models.Review, {foreignKey: 'listingId'});
    Listing.hasMany(models.Reservation, {foreignKey: 'listingId'});
  };
  return Listing;
};
