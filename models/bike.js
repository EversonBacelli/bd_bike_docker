'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bike.hasMany(models.Emprestimo, { foreignKey: 'bikeId' });
    }
  }
  Bike.init({
    codigo: {
      type: DataTypes.STRING,
      unique: true
      //primaryKey: true // Define como chave primária
    },
    cor: DataTypes.STRING,
    aro: DataTypes.INTEGER,
    dataAquisicao: DataTypes.DATE,
    tamanho: DataTypes.STRING,
    modelo: DataTypes.STRING,
    img_url: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bike',
  });
  return Bike;
};