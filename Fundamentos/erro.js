function tratarErroELancar(erro) {
    // throw new Error ('...')
    // throw 10
    // thow true
    // thow 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

// TRY bloco q potencialmente pode gerar algum tipo de erro
// CATCH serve para o tratamento de erro
// FINALLY sempre sera executado
// THROW lançar a mensagem de erro (varios tipos)

function imprimirNomeGrifado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')   
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGrifado(obj)