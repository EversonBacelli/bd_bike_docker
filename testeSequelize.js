const { Cliente, Bike, Emprestimo } = require('./models');

async function criarRegistros(){
    try {
        // Criar um cliente
        const cliente = await Cliente.create({
            cpf: `${Math.floor(Math.random() * 10000000000)}`,
            nome: 'João Silva',
            dataNasc: '1990-01-01',
            telefone: '123456789',
            sexo: 'M',
            endereco: 'Rua A, 123',
            email: 'joao@email.com',
            status: 'ATIVO'
        });
        
        // Criar uma bicicleta
        const bike = await Bike.create({
            codigo: 'B001',
            cor: 'Vermelha',
            aro: 26,
            dataAquisicao: new Date(),
            tamanho: 'M',
            modelo: 'Caloi',
            img_url: 'https://via.placeholder.com/150',
            status: 'DISPONÍVEL'
        });

        // Criar um empréstimo
        const emprestimo = await Emprestimo.create({
            numeroEmprestimo: 'E0500',
            dataEmprestimo: new Date(),
            dataDevolucao: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 dias depois
            valorTotal: 50.0,
            statusEmprestimo: 'ATIVO',
            clienteId: cliente.id,
            bikeId: bike.id
        });

        return [cliente, bike, emprestimo];
    } catch (error) {
        console.error('Erro ao criar registros:', error);
    }
    
}

(async() =>{
    let registros = await criarRegistros()

    console.log(registros[2].toJSON());
})();
