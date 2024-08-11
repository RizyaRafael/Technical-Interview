'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class About extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      About.hasMany(models.Picture, {foreignKey: "Section"})
    }
  }
  About.init({
    Title: DataTypes.STRING,
    Image: DataTypes.STRING,
    HeaderOne: DataTypes.STRING,
    HeaderTwo: DataTypes.STRING,
    HeaderThree: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'About',
  });
  return About;
};