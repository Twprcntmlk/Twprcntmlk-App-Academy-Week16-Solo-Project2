'use strict';
module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define('Host', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    personal: DataTypes.TEXT
  }, {});
  Host.associate = function(models) {
    Host.hasMany(models.Message, {foreignKey: 'hostId'});
    Host.hasMany(models.Listing, {foreignKey: 'hostId'});
  };
  return Host;
};
