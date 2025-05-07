'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emprestimo extends Model {
    static associate(models) {
      Emprestimo.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
      Emprestimo.belongsTo(models.Bike, { foreignKey: 'bikeId' });
    }
  }
  Emprestimo.init({
    numeroEmprestimo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dataEmprestimo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dataDevolucao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    valorTotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bikeId: {
      type: DataTypes.INTEGER, // Continua como INTEGER, pois referencia 'id'
      allowNull: false,
      references: {
        model: 'Bikes', // Nome da tabela associada
        key: 'id'       // Referencia o campo 'id' como chave primária
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Emprestimo',
  });
  return Emprestimo;
};