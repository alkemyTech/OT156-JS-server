"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activities.belongsTo(models.User, { as: "User" });
    }
  }
  Activities.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      content: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Activities",
    }
  );
  return Activities;
};
