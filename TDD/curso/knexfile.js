module.exports = {
    test: {
        client: 'pg',
        version: '15.2',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'root',
            database: 'barriga'
        },
        migrations: {
            directory: 'src/migrations'
        }
    }
}