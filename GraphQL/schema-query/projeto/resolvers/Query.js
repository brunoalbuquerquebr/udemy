const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Bom dia!";
  },
  horaAtual() {
    return `${new Date()}`;
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Bruno Albuquerque",
      email: "bruno@thoughtworks.com",
      idade: 40,
      salario_base: 20000,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Doritos",
      preco: 14.8,
      desconto: 0.5,
    };
  },
  numerosMegaSena() {
    return [2, 3, 14, 19];
  },
  usuarios() {
    return usuarios;
  },
  // usuario(_, args) {
  // const selecionados = usuarios.filter((u) => u.id === args.id);
  usuario(_, { id }) {
    const selecionados = usuarios.filter((u) => u.id === id);
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const filtrados = perfis.filter((p) => p.id === id);
    return filtrados ? filtrados[0] : null;
  },
};
