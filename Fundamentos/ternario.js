// o operador ternario tem 3 partes
// a primeira retorna verdadeiro ou falso
// a segunda retorna o valor da expressao verdadeira
// a terceira retorna o valor da expressao falsa
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.9))