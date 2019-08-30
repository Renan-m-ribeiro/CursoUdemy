let num1 = 1
let num2 = 2

// acrescenta uma unidade ao valor da unidade
num1++
console.log(num1)

// subtrai uma unidade ao valor da unidade
--num1
console.log(num1)

// o ++ adicionou antes ao numero pois é pré fixado
// como o -- é pos fixado o numero ainda estava com o valor
// anterior, ou seja 2 === 2, somente é decrementado
// dps da operaçao
console.log(++num1 === num2--)
console.log(num1 === num2)

