let comparaComThis = function (param) {
    console.log(this===param)
}
comparaComThis(global)

const obj = {}
// Atribuindo this ao obj
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
comparaComThis(this)

console.log('---------')

let comparaComArrow = param => console.log(this===param)
comparaComArrow(global)
comparaComArrow(module.exports)
comparaComArrow(this)

// Arrow function mais poderoso que BIND
comparaComArrow = comparaComArrow.bind(obj)
comparaComArrow(obj)