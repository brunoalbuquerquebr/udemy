const { perfis } = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const resposta = perfis.filter(p => p.id === usuario.perfil_id)
        return resposta ? resposta[0] : null
    }
}