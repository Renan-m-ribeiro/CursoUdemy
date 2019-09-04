function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco, // pode colocar somente o parametro
        desconto: 0.1    
    }
}
console.log(criarProduto('iPad', 2199,99))