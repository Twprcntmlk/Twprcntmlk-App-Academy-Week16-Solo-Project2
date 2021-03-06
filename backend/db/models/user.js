'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    imageUrl:{
      type:DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 256]
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    address:{
      type:DataTypes.STRING,
    },
    latitude:{
      type:DataTypes.FLOAT,
    },
    longitude: {
      type:DataTypes.FLOAT,
    },
    personal: {
      type: DataTypes.TEXT
    },
    isHost: {
      type: DataTypes.BOOLEAN
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };
  User.signup = async function ({ username, firstName,lastName, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      firstName,
      lastName,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Listing, {foreignKey: 'userId'});
    User.hasMany(models.Review, {foreignKey: 'userId'});
    User.hasMany(models.Message, {foreignKey: 'userId'});
    User.hasMany(models.Reservation, {foreignKey: 'userId'});
    User.hasMany(models.Message, {foreignKey: 'hostId'});
  };
  return User;
};
