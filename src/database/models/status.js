'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Status.hasOne(models.User,{ foreignKey: 'statusId', as: 'user' });
      Status.hasOne(models.Role,{ foreignKey: 'statusId', as: 'role' });
      Status.hasOne(models.Permission,{ foreignKey: 'statusId', as: 'permission' });
    }
  }
  Status.init({
    code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};