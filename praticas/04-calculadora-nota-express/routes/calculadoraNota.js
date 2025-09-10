// importar o express
const express = require('express');
// criar um router(Roteador)
const router = express.Router()

// Mapeamento das rotas e implemento a logica

router.get('/notaA1', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    const notaA1 = exercicio + trabalho + prova


    res.json({notaA1})
})











module.exports = router