const app = require('./app')

//para o arquivo de variaveis de ambiente que criamos
require('dotenv').config({path:'variaveis.env'})

app.set('port', process.env.PORT) //escolher uma porta padrao
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: " + server.address().port)
})

