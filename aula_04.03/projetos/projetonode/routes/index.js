const express = require('express')

const router = express.Router()
router.get('/', (req, res)=>{
    res.send('Olá, mundo! 2023') //mensagem exibida na pag web
})

router.get('/sobre',(req,res)=>{
    res.send('Página sobre!!!!') //acrescentar a aba /sobre na pag web
})

module.exports = router