// VAR tem escopo global e de funcao
// LET tem escopo global, de funcao e de blocos
let numero = 1
{
   let numero = 2
   console.log('dentro =', numero)
}
console.log('fora =', numero)
