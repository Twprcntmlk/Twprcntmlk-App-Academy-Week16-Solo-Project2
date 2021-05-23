'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    checkInDate: DataTypes.DATEONLY,
    checkOutDate: DataTypes.DATEONLY
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
    Reservation.belongsTo(models.User, {foreignKey: 'userId'});
    Reservation.belongsTo(models.Listing, {foreignKey: 'listingId'});
  };
  return Reservation;
};
