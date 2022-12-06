"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Claim.hasMany(models.User, { foreignKey: 'id', as: 'user' })
    }
  }
  Claim.init(
    {
      userId: DataTypes.INTEGER,
      claimType: DataTypes.STRING,
      claimValue: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Claim",
    }
  );
  return Claim;
};
