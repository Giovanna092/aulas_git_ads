const app = require('./app')

//utilizar as variaveis de ambiente contidas no arquivo variables.env
require('dotenv').config({path:'variables.env'})

//setar a porta do servidor
app.set('port',process.env.PORT || 7777)
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: "+server.address().port)
})