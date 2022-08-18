'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartList.init({
    title: DataTypes.TEXT,
    color: DataTypes.TEXT,
    src: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'CartList',
  });
  return CartList;
};