'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.hasMany(models.User, { foreignKey: 'id', as: 'User' });
      Role.hasMany(models.Status, {foreignKey: 'id', as: 'Status'});
      Role.hasOne(models.RolePermission, {foreignKey: 'roleId', as: 'rolePermission'});
    }
  }
  Role.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};