'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    const clientesCount = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM Clientes;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (clientesCount[0].count > 0) {
      console.log('Tabela Clientes já está populada. Nenhum dado será inserido.');
      return;
    }
    
    await queryInterface.bulkInsert('Clientes', [
      {
        cpf: '12345678900',
        nome: 'João Silva',
        dataNasc: '1990-01-01',
        telefone: '123456789',
        sexo: 'M',
        endereco: 'Rua A, 123',
        email: 'joao@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '98765432100',
        nome: 'Maria Oliveira',
        dataNasc: '1985-05-15',
        telefone: '987654321',
        sexo: 'F',
        endereco: 'Rua B, 456',
        email: 'maria@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '45678912300',
        nome: 'Carlos Pereira',
        dataNasc: '1992-03-10',
        telefone: '456789123',
        sexo: 'M',
        endereco: 'Rua C, 789',
        email: 'carlos@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '78912345600',
        nome: 'Ana Souza',
        dataNasc: '1995-07-20',
        telefone: '789123456',
        sexo: 'F',
        endereco: 'Rua D, 101',
        email: 'ana@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '32165498700',
        nome: 'Pedro Santos',
        dataNasc: '1988-11-30',
        telefone: '321654987',
        sexo: 'M',
        endereco: 'Rua E, 202',
        email: 'pedro@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '65498732100',
        nome: 'Julia Lima',
        dataNasc: '1993-05-25',
        telefone: '654987321',
        sexo: 'F',
        endereco: 'Rua F, 303',
        email: 'julia@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '15975348600',
        nome: 'Lucas Almeida',
        dataNasc: '1991-09-15',
        telefone: '159753486',
        sexo: 'M',
        endereco: 'Rua G, 404',
        email: 'lucas@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '75395185200',
        nome: 'Fernanda Costa',
        dataNasc: '1987-02-18',
        telefone: '753951852',
        sexo: 'F',
        endereco: 'Rua H, 505',
        email: 'fernanda@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '85245612300',
        nome: 'Rafael Nunes',
        dataNasc: '1994-12-12',
        telefone: '852456123',
        sexo: 'M',
        endereco: 'Rua I, 606',
        email: 'rafael@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '95175325800',
        nome: 'Camila Rocha',
        dataNasc: '1996-08-08',
        telefone: '951753258',
        sexo: 'F',
        endereco: 'Rua J, 707',
        email: 'camila@email.com',
        status: 'ATIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};