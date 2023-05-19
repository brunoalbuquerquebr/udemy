const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Olá'
    },
    horaAtual() {
        return new Date().toISOString()
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Bruno',
            email: 'bruno@gmail.com',
            idade: 41,
            salario_real: 1300.00,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Macbook',
            preco: 1000,
            desconto: 0.15
        }
    },
    numerosMegaSena() {
        // return [4, 10, 23, 32, 40, 52, 53]
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map((n) => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    // usuario(_, args) {
    //     const selecionados = usuarios.filter((u) => u.id === args.id)
    //     return selecionados ? selecionados[0] : null
    // }
    usuario(_, { id }) {
        const selecionados = usuarios.filter((u) => u.id === id)
        return selecionados ? selecionados[0] : null
    },

    perfis() {
        return perfis
    },

    perfil(_, { id }) {
        const selecionados = perfis.filter((p) => p.id === id)
        return selecionados ? selecionados[0] : null
    }
}