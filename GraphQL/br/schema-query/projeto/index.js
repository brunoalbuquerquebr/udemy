const { ApolloServer, gql } = require('apollo-server')

const alunos = [
    {
        id: 1,
        nome: "Ana",
        email: "ana@email.com",
        idade: 15
    },
    {
        id: 2,
        nome: "Jose",
        email: "jose@email.com",
        idade: 17
    },
    {
        id: 1,
        nome: "Maria",
        email: "maria@email.com",
        idade: 14
    }
]

const typeDefs = gql`

    type Aluno {
        id: Int!
        nome: String!
        email: String!
        idade: Int
        nota: Float
        bolsista: Boolean
        situacao: String
    }

    type Query {
        hello: String
        alunoLogado: Aluno
        alunos: [Aluno!]!
        aluno(id: Int): Aluno
    }

    type Mutation {
        novoAluno(
            nome: String,
            email: String,
            idade: Int
        ): Aluno
    }
`

const resolvers = {
    Aluno: {
        nota(aluno) {
            return aluno.nota_aluno
        },
        situacao(aluno) {
            if (aluno.nota_aluno >= 7) {
                return 'Aprovado'
            }
            return 'Reprovado'
        }
    },
    Query: {
        hello() {
            return 'Hello!'
        },
        alunoLogado() {
            return {
                id: 1,
                nome: "Silva",
                email: "silva@email.com",
                idade: 21,
                // nota: 8.5,
                nota_aluno: 5.5,
                bolsista: true,
            }
        },
        alunos() {
            return alunos
        },
        aluno(_, args) {
            const resp = alunos.filter(a => a.id === args.id)
            return resp ? resp[0] : null
        }
    },
    Mutation: {
        novoAluno(_, { nome, email, idade }) {
            const novo = {
                id: 4,
                nome,
                email,
                idade,
            }
            alunos.push(novo)
            return novo
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