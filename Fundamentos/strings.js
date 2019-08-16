const escola = 'Cod3r'

// .charAt(x) = mostra o caracter da string
// na posicao X começa por 0
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// .charCodeAt(x) = mostra o endereço UNICODE
// do caracter da string na posicao X começa por 0
console.log(escola.charCodeAt(3))

// .indexOf = mostra aonde o caracter esta na
// string
console.log(escola.indexOf('3'))

// .substring(x) = mostra a string a partir de X
// .substring(x,y) = mostra a string a partir de X até Y
console.log(escola.substring(1))
console.log(escola.substring(0,3))

// .concat = concatenar
// .concat pode ser trocado por +
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + (escola) + ("!"))

// .replace(x,y) = troca o caracter do endereço X pelo 
// caracter Y
console.log(escola.replace(3,'e'))

// .split('x') = transforma a string em array, usando o X
// como separador.
console.log('Ana, Maria, Pedro'.split(','))
