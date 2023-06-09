// Exercícios de interpretação de código
/* 1. const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que vai ser impresso no console?*/
// No 'console.log(filme.elenco[0])' irá aparecer Matheys Nachtergaele. 
// No 'console.log(filme.elenco[filme.elenco.length - 1])' irá aparecer Virginia Cavendish.
// No console.log(filme.transmissoesHoje[2]) irá aparecer canal: "Globo" horario: "14h"

// -------------------------------------------------------------------------------------------------
/* 2. Leia o código embaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) 

a) O que vai ser impresso no console?
b) O que faz a sintaxe dos três pontos antes do nome de um objeto? */

// a) No 'console.log(cachorro)' irá aparecer o objeto de cachorro, imprimindo todo os dados dentro dos {}. No 'console.log(gato)' será impresso todos os dados dentro do objeto cachorro, mas o nome será 'Juba', ao invés de 'Juca'. No 'console.log(tartaruga)' será impresso todos os dados presentes no objeto gato, mas ao invés de 'Juba', será impresso Jubo no nome, pois a função replaceAll() muda as letras 'a' para 'o'.

// -------------------------------------------------------------------------------------------------
/* 3. Leia o código abaixo:

// function minhaFuncao(objeto, propriedade) {
// return objeto[propriedade]
// }

// const pessoa = {
// nome: "Caio", 
// idade: 23, 
// backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// Aparecerá false e undefined.

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu? */
// False, pois está sendo atribuido um boolean false para o objeto backender. E o 'undefined' aparece, pois não foi definido nenhum objeto denominado 'altura'.

// -------------------------------------------------------------------------------------------------
// Exercícios de escrita de código
/* 1. Resolva os passos a seguir:
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

    Exemplo de entrada
    const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
    }

    Exemplo de saída
    "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

    b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
    */

// const pessoa = {
//     nome: 'Amanda',
//     apelidos: ['Mands','Amandex', 'Nana']
// }

// function receberObjeto (objeto){
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de : ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
// }

// receberObjeto(pessoa);

// const pessoa2 = {
//     ...pessoa,
//     apelidos:['Ju', 'Jubs', 'Xs']
// };

// function receberNova (objeto2){
//     console.log(`Eu sou ${objeto2.nome}, mas pode me chamar de : ${objeto2.apelidos[0]}, ${objeto2.apelidos[1]}, ${objeto2.apelidos[2]}`)
// }

// receberNova(pessoa2)

// -------------------------------------------------------------------------------------------------
/* 2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */

// const pessoa2A = {
//     nome: "Amanda",
//     idade: 17,
//     profissao: "Estudante"
// }

// const pessoa2a = {
//     nome: "Eduardo",
//     idade: 29,
//     profissao: "Engenheiro"
// }
    
   /* b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão` */

// function imprimir2(objeto1, objeto2) {
//     const listaInformacoes = []
//     function addInformacoes(objeto) {
//         const { nome, idade, profissao } = objeto
//         listaInformacoes.push(nome, nome.length, idade, profissao, profissao.length);
//     }
  
//     addInformacoes(objeto1);
//     addInformacoes(objeto2);
  
//     return listaInformacoes;
// }

// const dados = imprimir2(pessoa2A, pessoa2a);
// console.log(dados);

// -------------------------------------------------------------------------------------------------
/* 3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

    c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.

    d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos
    */

// const carrinho = []

// const objeto1 ={
//     nome:'Melancia',
//     disponibilidade: true
// }

// const objeto2 ={
//     nome: 'Uva',
//     disponibilidade: true
// }

// const objeto3 ={
//     nome: 'Abacaxi',
//     disponibilidade: true
// }

// function recebeFruta (objeto){
//     carrinho.push(objeto)
// }

// recebeFruta(objeto1)
// recebeFruta(objeto2)
// recebeFruta(objeto3)
// console.log(carrinho)

