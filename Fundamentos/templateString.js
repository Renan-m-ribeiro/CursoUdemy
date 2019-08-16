const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá
${nome}!`
console.log(concatenacao, template)

// TEMPLATE STRING
// Ele permite o uso de expressoes qnd estiver entre `
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
