'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasMany(models.Emprestimo, { foreignKey: 'clienteId' });
    }
  }
  Cliente.init({
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    dataNasc: DataTypes.DATE,
    telefone: DataTypes.STRING,
    sexo: DataTypes.STRING,
    endereco: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};