'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Buscar IDs de clientes e bikes existentes no banco
    const clientes = await queryInterface.sequelize.query(
      'SELECT id FROM Clientes;',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const bikes = await queryInterface.sequelize.query(
      'SELECT id FROM Bikes;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (clientes.length === 0 || bikes.length === 0) {
      throw new Error('Não há clientes ou bikes suficientes no banco de dados para criar empréstimos.');
    }

    const emprestimosCount = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM Emprestimos;',
      { type: Sequelize.QueryTypes.SELECT }
    );
    
    if (emprestimosCount[0].count > 0) {
      console.log('Tabela Emprestimos já está populada. Nenhum dado será inserido.');
      return;
    }

    
    const emprestimos = [];
    const now = new Date();

    // Função para selecionar um ID aleatório de uma lista
    const getRandomId = (list) => list[Math.floor(Math.random() * list.length)].id;

    for (let i = 1; i <= 50; i++) {
      const clienteId = getRandomId(clientes); // Seleciona um cliente aleatório
      const bikeId = getRandomId(bikes);      // Seleciona uma bike aleatória

      emprestimos.push({
        numeroEmprestimo: `E${String(i).padStart(3, '0')}`, // Exemplo: E001, E002...
        dataEmprestimo: new Date(now.getTime() - i * 24 * 60 * 60 * 1000), // Data de empréstimo retroativa
        dataDevolucao: new Date(now.getTime() - (i - 7) * 24 * 60 * 60 * 1000), // Data de devolução retroativa
        valorTotal: (Math.random() * 100 + 20).toFixed(2), // Valor entre 20 e 120
        statusEmprestimo: i % 2 === 0 ? 'ATIVO' : 'FINALIZADO', // Alterna entre ATIVO e FINALIZADO
        clienteId: clienteId,
        bikeId: bikeId,
        createdAt: now,
        updatedAt: now
      });
    }

    await queryInterface.bulkInsert('Emprestimos', emprestimos);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Emprestimos', null, {});
  }
};