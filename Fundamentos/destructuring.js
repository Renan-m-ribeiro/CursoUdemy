// novo recurso do ES2015

const pessoa = {
   nome: 'Ana',
   idade: 5,
   endereco: {
      logradouro: 'Rua ABC',
      numero: 1000
   }
}

// essas chaves representam o destructuring
// tire de dentro do objeto o NOME e a IDADE
const { nome, idade } = pessoa
console.log(nome, idade)

// N passa a ter o valor da variavel NOME
// I passa a ter o valor da variavel IDADE
const { nome: n, idade: i } = pessoa
console.log(n,i)

// indicando que sobrenome é undefined
// indicando que bemHumorada é true
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)

// CEP = undefined
const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)

// para desestruturar um dado aninhado, tem q ter ctz
// que o caminho esta correto, apenas os ultimos dados
// podem estar nulos ou undefineds

//const {conta:{ag,num}} = pessoa  ERRO!

