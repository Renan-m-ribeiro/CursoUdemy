// funcao executa um processo baseado numa sentenca de codigo.
// um trecho de codigo que vc pode reusar/chamar no codigo.

// função sem retorno
function imprimirSoma(a, b){
   console.log(a+b)
}

imprimirSoma(2,3)
// se chamar a função sem dar um valor irá fazer A + undefined = NaN
imprimirSoma(2)
// estranho, mas funciona msm que passe a qnt de parametros
imprimirSoma(2,10,4,5,6,7,8)
// undefined + undefined
imprimirSoma()

function soma(a,b=0){
   return a+b
}

console.log(soma(2,3))
console.log(soma(2))
// undefined + 1
console.log(soma())
