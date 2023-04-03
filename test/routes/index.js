const express = require('express')

//rotas (quando o servidos for acessado, para onde vai???) -- endpoint/rotas
const router = express.Router()
router.get('/',(req,res)=>{
    res.send('Olá Mundo 2023!!!')
})
router.get('/contato',(req,res)=>{
    res.send('Essa é a pagina de contato do seu site!!!')
})

module.exports = router

