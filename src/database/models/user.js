'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      User.hasOne(models.Role, { foreignKey: 'userId', as: 'role' }),
      User.hasMany(models.Status, {foreignKey: 'id', as: 'status'})
      User.hasOne(models.Claim, { foreignKey: 'userId', as: 'claim' })
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    lastLoginIp: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    deleteFlag: DataTypes.BOOLEAN,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};