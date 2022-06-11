//Método de Strings

//Sabemos que todo site tem uma URL e precisamos passar
//sempre o protocolo HTTP antes. Acontece que alguém cadastrou 
//uma lista de sites sem o protocolo e agora precisamos consertar isso.

//Para isso, vamos criar uma função chamada dominio. Essa função
//vai receber um parâmetro URL (pode ser qualquer nome), que é uma
//string. O retorno dessa função é a própria URL, mas com http:// no começo.

var site = "twitter.com";

function dominio(site){
    return console.log('http://'+ site);
}

dominio(site);


//Arrow Function Exercício I

//Vamos começar a praticar a sintaxe de uma arrow
//function que não recebe nenhum parâmetro.
//Todas as variáveis precisam ser declaradas com let.

function cincoNumeros() {
    return [1,2,3,4,5];
}

let cincoNumeros1 = () => [1,2,3,4,5]

function multiplicarPorDois() {
  return 123 * 2 ;
}

let multiplicarPorDois1 = () => (123 * 2)

function mostrarNome() {
  return "Meu nome é Ryan Dahl";
}

let mostrarNome1 = () => ("Meu nome é Ryan Dahl")


//Exercicio IF Ternário

//Declare uma variável com o nome dado e atribua um valor booleano.
//Então você deve fazer um  if para avaliar essa variável:
//se for true imprimir "É verdadeiro!", caso contrário "É falso!".

var dado = true

if(dado === true){
     console.log("É verdadeiro!")
} else {
     console.log( "É falso!")
}

//Exercicio II

//Usando "switch" você deve avaliar se a variável "dia" é segunda, 
//quarta ou sexta-feira e, nesse caso, você deve
//imprimir o texto " você tem aulas!".Para qualquer outro caso, 
//você deve imprimir "você não tem aulas".

let dia = "sabado";

function fimDeSemana(dia){
	switch(dia){
		case "segunda":
			console.log("você tem aulas!");
		break;

		case "quarta":
			console.log("você tem aulas!");
		break;

		case "sexta":
			console.log("você tem aulas!");
		break;

		default:
			console.log("você não tem aulas!");
		break;
	}
}

fimDeSemana(dia)

//Exercicio II

// O objetivo deste exercício é imprimir no console um texto que
// varia de acordo com o dia que contém na variável dia. Para isso,
// já apresentamos um código feito com if / else que você precisará
// modificá-lo para testar as diferentes mensagem.

let diaSemana = 'segunda-feira'

function fimDeSemana1(diaSemana) {
    switch(diaSemana){
		case 'sexta-feira':
			console.log('Bom fim de semana!');
		break;

		case 'segunda-feira':
			console.log('Boa semana!');
		break;

        default: 
            console.log('Bom dia!');
        break;
    }
}

fimDeSemana1(diaSemana)

//Ciclo For

// Vamos programar uma função que se comporte como um papagaio. Sim, Tudo o que "ouve", repete!
// A função se chama papagaio e deve receber como parâmetro um texto e repetir 5 vezes no console.

let frase = 'Olá'

const papagaio = (frase) => {
    for(let i = 0; i <= 4; i++){
        console.log(frase)
    }
}