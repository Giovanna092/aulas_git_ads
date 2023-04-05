//importa express
const express = require('express')

//importa rota
const router = require('./routes/index')

//conf basicas do app
const app = express()
app.use('/',router)

//exporta o app
module.exports = app 