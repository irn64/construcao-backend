// importar o express
const express = require('express');
// criar um router(Roteador)
const router = express.Router()

// Mapeamento das rotas e implemento a logica

router.get('/notaA1', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    // validar se os parametros são numeros
    if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
        return res.status(400).json({ erro: "Notas Inválidas" });
    }

    // validar se as notas estão no intervalo correto
    if (
        exercicio < 0 ||
        exercicio > 1 ||
        trabalho < 0 ||
        trabalho > 3 ||
        prova < 0 ||
        prova > 6
    ) {
        return res.status(400).json({ erro: "Notas fora do intervalo" });
    }

    const notaA1 = exercicio + trabalho + prova

    res.json({notaA1})
})

// calcular nota A2
router.get('/notaA2', (req, res, next) => {
    
    // A lógica de extrair as notas vem para dentro
    const exercicio = parseFloat(req.query.exercicio);
    const trabalho = parseFloat(req.query.trabalho);
    const prova = parseFloat(req.query.prova);

    // validar se os parametros são numeros
    if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
        return res.status(400).json({ erro: "Notas Inválidas" });
    }

    // validar se as notas estão no intervalo correto
    if (
        exercicio < 0 ||
        exercicio > 1 ||
        trabalho < 0 ||
        trabalho > 3 ||
        prova < 0 ||
        prova > 6
    ) {
        return res.status(400).json({ erro: "Notas fora do intervalo" });
    }
    const notaA2 = exercicio + trabalho + prova

    res.json({notaA2})


});








module.exports = router