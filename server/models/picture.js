'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Picture.belongsTo(models.About, {foreignKey:"Section"})
    }
  }
  Picture.init({
    Image: DataTypes.STRING,
    Section: {
      DataTypes: DataTypes.INTEGER,
      references: {
        model:"About",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};