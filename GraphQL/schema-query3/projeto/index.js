const { ApolloServer, gql } = require('apollo-server')

const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' },
]

const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

const typeDefs = gql`
scalar Date

type Perfil {
    id: Int
    nome: String
}

type Usuario {
    id: Int
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
    perfil: Perfil
}


type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
}

# Pontos de entrada da API
    type Query {
        ola: String
        horaAtual: String
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: Int): Usuario
        perfis: [Perfil]
        perfil(id: Int): Perfil
    }
`

const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco * (1 - produto.desconto)
            } else {
                return produto.preco
            }
        }
    },
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        perfil(usuario) {
            const resposta = perfis.filter(p => p.id === usuario.perfil_id)
            return resposta ? resposta[0] : null
        }
    },
    Query: {
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

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
})