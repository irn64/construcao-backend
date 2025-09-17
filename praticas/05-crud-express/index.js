// importa o express e cors
const express = require('express');
const cors = require('cors');

// crio uma instancia da aplicacao
const app = express();

// intermediarios
app.use(cors()) // habilita o cors nas requisicoes
app.use(express.json()) // habilita o json no body da requisicao

// roteadores
const contatosRouter = require('./routes/contatos')
app.use(contatosRouter)



// executar a aplicacao
app.listen(3000, () => {
    console.log('API executando em http://localhost:3000');
})