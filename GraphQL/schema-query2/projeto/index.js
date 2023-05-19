const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`

    type Query {
        ola: String
        horaAtual: String
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Olá!'
        },
        horaAtual() {
            const horaAtual = Date.now()
            return horaAtual.toString()
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