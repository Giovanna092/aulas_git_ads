//importa express
const express = require('express')

//importa rota
const router = require('./routes/index')

//conf basicas do app
const app = express()
app.use('/',router)

app.use(express.json()) //requisicoes post sao tratadas como get

//exporta o app
module.exports = app 