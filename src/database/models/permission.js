'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permission.hasMany(models.Role, { foreignKey: 'id', as: 'Role' });
      Permission.hasMany(models.Status, {foreignKey: 'id', as: 'Status'});
    }
  }
  Permission.init({
    name: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};