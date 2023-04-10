const express = require('express')

const router = express.Router()
/*router.get('/', (req, res)=>{
    let nome = req.query.nome
    let idade = req.query.idade
    res.send('Olá! ' + nome + ', você tem '+ idade + ' anos de idade') //mensagem exibida na pag web
})*/

/*
router.get('/', (req, res)=>{
    let nome = req.query.nome
    let sobrenome = req.query.sobrenome
    res.json({
        nomeCompleto: nome+ ' '+ sobrenome
    })
})*/

/*
//tudo que vier na query transformara em json
router.get('/', (req, res)=>{
    res.json(req.query)
})

router.get('/posts/:slug',(req,res)=>{
    let slug = req.params.slug
    res.send('Slug do post: '+ slug) 
})
*/

module.exports = router