const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Currency extends Model {}

Currency.init(
  {
    currency_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3,3],
      }
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'currency'
  }
);

module.exports = Currency;
