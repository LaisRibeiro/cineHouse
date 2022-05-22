//Criar arquivo chamado cinema.js, nele criar uma variável chamada cinema e esta
// deverá receber um valor como nome da loja

var cinema = 'Cine Espaço NH';

//passar a variável anteriormente criada como parâmetro do console.log, a fim 
//de que ao executar o arquivo, os alunos possam ver o valor impresso no terminal

console.log(cinema);

//deve ser criada uma variável do
//tipo array chamada catalogo. Esta será um array de objetos, onde cada objeto
//representará um filme.

const catalogo = [
    {
        codigo: 0,
        titulo: 'De repente 30',
        duracao: 130,
        atores: [
            'Jennifer Garner', 'Mark Ruffalo', 'Christa B. Allen'
        ],
        anoLancamento: 2004,
        emCartaz: false,
    },
    {
        codigo: 1,
        titulo: 'The Batman',
        duracao: 190,
        atores: [
            'Robert Pattinson', 'Zoë Kravitz', 'PAUL DANO'
        ],
        anoLancamento: 2022,
        emCartaz: true,
    }
];

//Função Adicionar

catalogo.push({
    codigo: 2,
    titulo: 'Meninas Malvadas',
    duracao: 150,
    atores: ['Atriz1', 'Atriz 2'],
    anoLancamento: 2003,
    emCartaz: false,
})

console.log(catalogo);

//Função Buscar Filme

var buscarFilme = catalogo.find(filme => filme.titulo === 'Meninas Malvadas');
console.log('Filme Selecionado: ', buscarFilme);

//Alterar Status EmCartaz

catalogo.find(filme =>{ (filme.titulo === 'Meninas Malvadas'),
filme.emCartaz = true});

console.log(catalogo);