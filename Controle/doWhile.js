function getInteiroAleatorioEntre (min,max) {
    const valor = Math.random() * (max - min + 1) + min
    return Math.floor(valor)
}

let opcao = -1

/*
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}
*/

// a diferenca do DO/WHILE para o WHILE e que
// pode-se colocar o while no fim da estrutura
// podendo assim alterar uma variavel antes de ser
// executada pelo WHILE 
// Uma ideia parecida com: ++n e n++
do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while (opcao != -1)