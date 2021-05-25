'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    userId: DataTypes.INTEGER,
    hostId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.User, {foreignKey: 'userId'});
    Message.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Message;
};
