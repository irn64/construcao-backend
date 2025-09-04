// importar o express
const express = require('express')

// criar uma instancia(express) da minha aplicacao
const app = express()

// guardar o numero da porta
const porta = 3000

// Middlewares (intermediarios)

app.use((req, res, next) => {
    console.log("Time: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})


app.get('/teste', (req, res, next) => {
    res.send('Resposta para requisição no /teste')
})

app.get('/pessoas', (req, res, next) => {
    const pessoas = [
        { id: 1, 
        nome: 'João', 
        idade: '25'},
        { id: 2, 
        nome: 'Sara', 
        idade: '19'}]
    
        

    res.json(pessoas)
})



// Executa a aplicacao

app.listen(porta, () => {
    // imprimo uma mensagem para confirmar que a aplicacao esta rodando
    console.log("Aplicação rodando em http://localhost:3000")
})