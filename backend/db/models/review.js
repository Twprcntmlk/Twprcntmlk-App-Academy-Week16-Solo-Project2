'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    cleanliness: DataTypes.INTEGER,
    communication: DataTypes.INTEGER,
    checkIn: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER,
    location: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Listing, {foreignKey: 'listingId'});
  };
  return Review;
};
