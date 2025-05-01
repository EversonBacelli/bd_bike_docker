'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    const bikesCount = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM Bikes;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (bikesCount[0].count > 0) {
      console.log('Tabela Bikes já está populada. Nenhum dado será inserido.');
      return;
    }

    // Inserir os dados
    await queryInterface.bulkInsert('Bikes', [
      {
        codigo: 'B001',
        cor: 'Vermelha',
        aro: 26,
        dataAquisicao: new Date(),
        tamanho: 'M',
        modelo: 'Caloi',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B002',
        cor: 'Azul',
        aro: 29,
        dataAquisicao: new Date(),
        tamanho: 'G',
        modelo: 'Monark',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B003',
        cor: 'Preta',
        aro: 24,
        dataAquisicao: new Date(),
        tamanho: 'P',
        modelo: 'Sense',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B004',
        cor: 'Verde',
        aro: 26,
        dataAquisicao: new Date(),
        tamanho: 'M',
        modelo: 'Caloi',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B005',
        cor: 'Amarela',
        aro: 29,
        dataAquisicao: new Date(),
        tamanho: 'G',
        modelo: 'Monark',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B006',
        cor: 'Branca',
        aro: 24,
        dataAquisicao: new Date(),
        tamanho: 'P',
        modelo: 'Sense',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B007',
        cor: 'Rosa',
        aro: 26,
        dataAquisicao: new Date(),
        tamanho: 'M',
        modelo: 'Caloi',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B008',
        cor: 'Cinza',
        aro: 29,
        dataAquisicao: new Date(),
        tamanho: 'G',
        modelo: 'Monark',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B009',
        cor: 'Laranja',
        aro: 24,
        dataAquisicao: new Date(),
        tamanho: 'P',
        modelo: 'Sense',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B010',
        cor: 'Roxa',
        aro: 26,
        dataAquisicao: new Date(),
        tamanho: 'M',
        modelo: 'Caloi',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B011',
        cor: 'Vermelha',
        aro: 29,
        dataAquisicao: new Date(),
        tamanho: 'G',
        modelo: 'Monark',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B012',
        cor: 'Azul',
        aro: 24,
        dataAquisicao: new Date(),
        tamanho: 'P',
        modelo: 'Sense',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B013',
        cor: 'Preta',
        aro: 26,
        dataAquisicao: new Date(),
        tamanho: 'M',
        modelo: 'Caloi',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B014',
        cor: 'Verde',
        aro: 29,
        dataAquisicao: new Date(),
        tamanho: 'G',
        modelo: 'Monark',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B015',
        cor: 'Amarela',
        aro: 24,
        dataAquisicao: new Date(),
        tamanho: 'P',
        modelo: 'Sense',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B016',
        cor: 'Branca',
        aro: 26,
        dataAquisicao: new Date(),
        tamanho: 'M',
        modelo: 'Caloi',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B017',
        cor: 'Rosa',
        aro: 29,
        dataAquisicao: new Date(),
        tamanho: 'G',
        modelo: 'Monark',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B018',
        cor: 'Cinza',
        aro: 24,
        dataAquisicao: new Date(),
        tamanho: 'P',
        modelo: 'Sense',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B019',
        cor: 'Laranja',
        aro: 26,
        dataAquisicao: new Date(),
        tamanho: 'M',
        modelo: 'Caloi',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'B020',
        cor: 'Roxa',
        aro: 29,
        dataAquisicao: new Date(),
        tamanho: 'G',
        modelo: 'Monark',
        img_url: 'https://via.placeholder.com/150',
        status: 'DISPONÍVEL',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bikes', null, {});
  }
};