// importa o express
const express = require('express');
// crio um roteador
const router = express.Router();

// implemento as rotas e a logica


// CRUD de contatos (Create, Read, Update, Delete)

// variavel pra guardar os contatos
let contatos = ["Joao", "Maria"];

// buscar a lista de contatos
router.get('/contatos', (req, res, next) => {
    res.json(contatos);
})

// cadastrar o contato
router.post('/contatos', (req, res, next) => {
    const { nome } = req.body
    // validacoes
    if(!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' })
    }
    if (contatos.includes(nome)) {
        return res.status(409).json({ error: 'Contato já existe' })
    }
    contatos.push(nome)
    res.status(201).json({ mensage: 'Contato adicionado com sucesso' })
})

// deletar o contato
router.delete('/contatos/:nome', (req, res, next) => {
    const nome = req.params.nome
    contatos = contatos.filter(contato => contato !== nome)
    res.json({ mensage: 'Contato removido com sucesso' })
})

// deletar todos os contatos
router.delete('/contatos', (req, res, next) => {
    contatos = []
    res.json({ mensage: 'Todos os contatos foram removidos com sucesso' })
})






// exporto o roteador
module.exports = router;