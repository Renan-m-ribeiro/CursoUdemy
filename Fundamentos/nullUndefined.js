let valor // nao inicializada
console.log(valor)

// significa a ausencia de valor e de endereço
valor = null
console.log(valor)
//console.log(valor.toString()) Erro!



const produto = {}
// nao esta definido o preco do produto,logo, undefined
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)







