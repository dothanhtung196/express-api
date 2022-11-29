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
      Role.hasOne(models.Permission, { foreignKey: 'roleId', as: 'Permission' });
      Role.hasMany(models.Status, {foreignKey: 'id', as: 'Status'});
    }
  }
  Role.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};