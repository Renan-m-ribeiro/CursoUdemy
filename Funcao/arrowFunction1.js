// exemplo onde e dado um parametro
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito

console.log(dobro(2))


print = x => console.log(x)
print('lalalala')


// Exemplo onde nao e dado um parametro
let ola = function() {
    return 'Olá'
}

ola = () => 'Olá!'

ola=_=>'Olá!' // possui um param

console.log(ola())