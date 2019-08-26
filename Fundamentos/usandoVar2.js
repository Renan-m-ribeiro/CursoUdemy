// tanto fora quanto dentro é = a 2 pois NUMERO é sobrescrito
// em escopo global.
var numero = 1
{
   var numero = 2
   console.log('dentro =', numero)
}
console.log('fora =', numero)