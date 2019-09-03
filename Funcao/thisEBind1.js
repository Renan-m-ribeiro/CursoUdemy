const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// BIND serve para "amarrar" o this na funcao
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
