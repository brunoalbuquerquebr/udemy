const consign = require('consign')
const express = require('express')
const app = express()
const knex = require('knex')
const knexfile = require('../knexfile')
// const knexlogger = require('knex-logger')

app.db = knex(knexfile.test)

//--Para funcionar sem modo verboso - secure-mode verbose=false
// app.use(knexlogger(app.db))

consign({ cwd: 'src', verbose: false })
    .include('./config/middleware.js')
    .then('./services')
    .then('./routes')
    .then('./config/routes.js')
    .into(app)

app.get('/', (req, res) => {
    res.status(200).send()
})
//--Para funcionar sem modo verboso - secure-mode verbose=false
// app.db.on('query', (query) => {
//     console.log({ sql: query.sql, bindings: query.bindings ? query.bindings.join(',') : '' });
// }).on('query-response', (response) => {
//     console.log(response)
// }).on('error', error => console.log(error))

module.exports = app