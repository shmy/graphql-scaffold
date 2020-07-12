module.exports = {
  name: "default",
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123123",
  database: "graphql_test",
  entities: [
    "src/entities/*.ts",
    "src/entities/*.js",
  ],
  migrations: [
    "src/migrations/*.ts",
    "src/migrations/*.js",
  ],
  cli: {
    migrationsDir: "migrations"
  },
  logging: true,
  logger: "simple-console"
}
