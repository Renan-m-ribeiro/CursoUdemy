// passando dois atributos dentro de um destructuring
// significa q vai ser passado um objeto para esta funcao
// vai ser entregue os atributos prontos
function rand({ min = 0, max = 1000 }) {
   const valor = Math.random() * (max - min) + min
   return Math.floor(valor)
}

const obj = { max:50, min:40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))

//console.log(rand()) ERRO!



