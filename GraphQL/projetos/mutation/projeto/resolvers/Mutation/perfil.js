const { perfis, proximoId } = require('../../data/db')

function indicePerfil(filtro) {
    if (!filtro) return -1
    const { id, nome } = filtro
    if (id) {
        return perfis.findIndex(p => p.id === id)
    } else if (nome) {
        return perfis.findIndex(p => p.nome === nome)
    }
    return -1
}

module.exports = {
    // novoPerfil(_, { nome, email, idade }) {
    //     const novo = {
    //         id: proximoId(),
    //         nome,
    //         email,
    //         idade,
    //         perfil_id: 1,
    //         status: 'ATIVO'
    //     }

    novoPerfil(_, { dados }) {
        const nomeExistente = perfis.some(p => p.nome === dados.nome)

        if (nomeExistente) {
            throw new Error('Nome cadastrado')
        }

        const novo = {
            id: proximoId(),
            ...dados,
        }

        perfis.push(novo)
        return novo
    },

    excluirPerfil(_, { filtro }) {
        // const i = perfis.findIndex(u => u.id === id)
        const i = indicePerfil(filtro)
        if (i < 0) return null
        const excluidos = perfis.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },

    alterarPerfil(_, { filtro, dados }) {
        // const i = perfis.findIndex(u => u.id === args.id)
        const i = indicePerfil(filtro)
        if (i < 0) return null
        const perfil = {
            id: proximoId(),
            ...dados
        }
        // perfis[i].nome = args.nome
        // }


        perfis.splice(i, 1, perfil)
        return perfil
        // return perfis[i]
    }
}