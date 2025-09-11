const express = require('express');

const router = express.Router()

router.get('/somar', (req, res, next) => {
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
const soma = numA + numB;
res.json({soma})

});

router.get('/subtrair', (req, res, next) => {
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
const subtrair = numA - numB;
res.json({subtrair})

});

router.get('/multiplicar', (req, res, next) => {
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
const multiplicar = numA * numB;
res.json({multiplicar})

});

router.get('/divisao', (req, res, next) => {
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
const divisao = numA / numB;
res.json({divisao})

});

router.get('/potencia', (req, res, next) => {
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
const potencia = numA ** numB;
res.json({potencia})

});






module.exports = router