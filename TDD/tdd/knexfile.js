module.exports = {
  test: {
    client: "pg",
    version: "14.1",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "root",
      database: "tdd",
    },
    migrations: {
      directory: "src/migrations",
    },
  },
};
