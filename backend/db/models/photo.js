'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    listingId: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.Listing, {foreignKey: 'listingId'});
  };
  return Photo;
};
