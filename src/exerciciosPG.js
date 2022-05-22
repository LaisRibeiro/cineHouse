// Variáveis Exercício I

//A seguir, temos uma função expressa, que retorna uma String. Mas ela precisa de um nome. 
//Sua tarefa é preencher os espaços com a declaração de variável e dar à ela o nome de exemplo.

var exemplo = function () {
    return 'Oi, eu sou uma função expressa';
}

// Variáveis Exercício II

//Agora pense nesse exemplo, temos que validar algumas pessoas pelas suas idades.
//Nosso critério será 18 anos como idade miníma e 99 como idade máxima. Ninguém
//pode mudar essas definições. Para isso acontecer, iremos escrever constantes. 
//Vale dizer que, por questões de boas práticas,  é comum utilizar nome com letras 
//maiúsculas na hora de definir uma constante.

const IDADE_MINIMA = 18
const IDADE_MAXIMA = 99

// Tipos de dados - Exercício I

//Para este exercício, solicitamos que você declare 4 variáveis ​​usando o 
//let com os nomes: verdadeiro, nada, texto e numero. Para cada um deles, 
//você deve atribuir o tipo de dados que sugere seu nome, conforme apropriado.

let verdadeiro = true;
let nada = null;
let texto = 'Texto';
let numero = 5;

//Condicionais - Exercício I

//Declare uma variável com o nome dado e atribua um valor booleano.
//Então você deve fazer um  if para avaliar essa variável: se for
//true imprimir "É verdadeiro!", caso contrário "É falso!".

var dado = true;

if(dado === true){
    console.log('É verdadeiro');
} else {
    console.log('É falso');
}

//Condicionais Exercício II

//Neste exercício te damos uma variável chamada linguagem, que tem uma
//String atribuída. Seu trabalho agora é construir uma condicional
//if / else para que, se a variável contém "javascript" imprima no console 
//o texto "Estou aprendendo", se não imprima"Vou aprender mais pra frente".

let linguagem = "javascript"

if(linguagem === 'javascript'){
    console.log('Estou aprendendo')
} else {
    console.log('Vou aprender mais pra frente')
}

//Arrays Exercício I

//Para este exercício contamos com o array alunos. 
//Queremos saber onde estão guardados os nomes de "João" e 
//"Francisco". Utilize um dos métodos de array.

let alunos = ["João", "Pedro", "Jorge", "Francisco"]

let indiceJoao = alunos.indexOf('João');

let indiceFrancisco = alunos.indexOf('Francisco');