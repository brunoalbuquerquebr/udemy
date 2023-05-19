const { perfis } = require("../data/db");

module.exports = {
  salario(usuario) {
    return usuario.salario_base;
  },
  perfil(usuario) {
    const filtred = perfis.filter((p) => p.id === usuario.perfil_id);
    return filtred ? filtred[0] : null;
  },
};
