// Array é o vetor
// forma de agrupar multiplos valores em uma estrutura

// Declaracao de Array
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

// adicionar um elemento no array
valores[4] = 10
console.log(valores)
console.log(valores.length)

// adicionar elementos com valores no array
valores.push({id: 3}, false, null, 'teste')
console.log((valores))

// funcao pop tira o ultimo elemento do array e dps
// retorna ele
console.log(valores.pop())

// delete retira o elemento do array
delete valores[0]
console.log(valores)

// mostrando que o array é um objeto
console.log(typeof valores)


