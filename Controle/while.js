function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min + 1) + min
    return Math.floor(valor)
}

let opcao = 1
let n= 0

while (opcao != 0) {
    opcao = getInteiroAleatorioEntre(0, 10)
    n++
    if(opcao != 0) 
    console.log(`rolagem de dado: ${opcao}.`)
}

console.log(`O dado rolou ${n-1} vezes.`)
