// Armazenando uma função em uma variavel
const imprimirSoma = function(a,b){
   console.log(a + b)
   
}

imprimirSoma(2,3)

// Armazenado uma funcao arrow em uma variavel
// setinha fica no lugar de function
const soma = (a,b) => {
   return a + b
}

console.log(soma(2,3))

// retorno implicito, sintaxe pequena
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const print = a => console.log(a)
print('Legal!!!')
