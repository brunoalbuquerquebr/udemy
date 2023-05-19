const usuarios = [
  {
    id: 1,
    nome: "User 1",
    email: "user1@email.com",
    idade: 29,
    perfil_id: 21,
    status: "ATIVO",
  },
  {
    id: 2,
    nome: "User 2",
    email: "user2@email.com",
    idade: 30,
    perfil_id: 21,
    status: "INATIVO",
  },
  {
    id: 3,
    nome: "User 3",
    email: "user3@email.com",
    idade: 31,
    perfil_id: 22,
    status: "BLOQUEADO",
  },
];

const perfis = [
  {
    id: 21,
    nome: "Comum",
  },
  {
    id: 22,
    nome: "Administrador",
  },
];

module.exports = { usuarios, perfis };
