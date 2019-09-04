console.log(soma(3,4))
console.log(sub(3,4))
console.log(mult(3,4))

// function declaration
// é possivel chamar a funcao desde o começo
function soma (x,y) {
    return x + y
}
// function expression
// só e possivel chamar depois da declaracao
const sub = function (x,y) {
    return x - y
}

// named function expression
// só e possivel chamar depois da declaracao
const mult = function mult(x,y) {
    return x * y
}