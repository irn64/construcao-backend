const express = require('express');
const router = express.Router();

// lista de pessoas para simular um banco de dados
let listaPessoas = [
    { id: 1, nome: 'João', cpf: '123.456.789-00', email: 'jopao@gmail.com', dataNascimento: '01/01/2000'},
    { id: 2, nome: 'Maria', cpf: '103.466.719-01', email: 'maria@gmail.com', dataNascimento: '22/12/2005'}
]

// mapear as rotas e a logica
// Busca
// GET /pessoas
router.get('/pessoas', (req, res, next) => {
    res.json(listaPessoas)
})

// GET /pessoas/:id
router.get('/pessoas:id', (req, res, next) => {
    const id = req.params.id
    const pessoa = listaPessoas.find(p => pessoa.id == id)
    if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' })
    }
    res.json(pessoa)
})

// Criar usuário
// Post
router.post('/pessoas', (req, res, next) => {
    const {nome, cpf, email, dataNascimento} = req.body

    // validando se todos os campos foram preenchidos
    if (!nome || !cpf || !email || !dataNascimento) {
        return res.status(400).json({ error: 'Dados incompletos' })
    }

    // validar se o cpf já existe
    if (listaPessoas.some(pessoa => pessoa.cpf === cpf)) {
        return res.status(409).json({ error: 'CPF já cadastrado' })
    }

    const novaPessoa = {
        id: Date.now(),
        nome,
        cpf,
        email,
        dataNascimento
    }

    listaPessoas.push(novaPessoa)
    res.status(201).json({message: 'Pessoa criada com sucesso', novaPessoa})
})

// Atualizar
// PUT /pessoas/:id
router.put('/pessoas/:id', (req, res, next) => {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    // valido se a pessoa existe
    if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' })
    }
    // validando se os dados para atualizar foram enviados
    const {nome, email, dataNascimento} = req.body
    if (!nome || !email || !dataNascimento) {
        return res.status(400).json({ error: 'Dados incompletos' })
    }
    // atualizo os dados da pessoa
    pessoa.nome = nome
    pessoa.email = email
    pessoa.dataNascimento = dataNascimento

    res.json({message: 'Pessoa atualizada com sucesso', pessoa})
})

// Remover
// DELETE /pessoas/:id
router.delete('/pessoas/:id', (req, res, next) => {
    const id = req.params.id
    // validar se a pessoa não existe
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' })
    }

    listaPessoas = listaPessoas.filter(pessoa => pessoa.id != id)
    res.json({message: 'Pessoa removida com sucesso'})
})


// exportar o router
module.exports = router;