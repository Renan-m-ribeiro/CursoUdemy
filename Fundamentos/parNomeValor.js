//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
   const saudacao = 'Falaaa' //contexto léxico 2
   return saudacao
}

console.log(exec())
console.log(saudacao)

// Objetos são grupos aninhados de pares e nome/valor
const cliente = {
   nome: 'Pedro',
   idade: 32,
   peso: 98,
   endereco: {
      nome: 'Rua Muito Legal',
      numero: 123
   }
}

console.log(cliente.endereco.nome)
