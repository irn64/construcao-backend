const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

const DB_HOST = process.env.DB_HOST; 
const DB_USER = process.env.DB_USER; 
const DB_PASS = process.env.DB_PASS; 
const DB_NAME = process.env.DB_NAME; 

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

// conectar no banco MongoDB
mongoose.connect(url)
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
    })


const livrosModel = mongoose.model('livros', new mongoose.Schema(
    {
        nome: String,
        autor: String,
        editora: String,
        ano: Number,
        preco: String
    }
))



app.post('/livros', async (req, res, next) => {
    const livros = req.body
    if(!livros.nome){
        return res.status(400).json({error: 'O campo nome é obrigatório'})
    }
    const livrosCriada = await livrosModel.create(livros)
    res.status(201).json(livrosCriada)
})


app.get('/livros', async (req, res, next) => {
    const livros = await livrosModel.find()
    res.json(livros)
})

app.put('/livros/:id', async (req, res, next) =>{
    const id = req.params.id
    const livros = req.body
    if(!livros.nome){
        return res.status(400).json({error: 'O campo nome é obrigatório'})
    }

    const livrosAtualizada = await livrosModel.findByIdAndUpdate(id, livros, {new: true})
    if(!livrosAtualizada){
        return res.status(404).json({error: 'Livro não encontrada'})
    }
    res.json(livrosAtualizada)
})

// Delete
app.delete('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    await livrosModel.findByIdAndDelete(id)
    res.json({message: 'Livro deletada'})
})

// start
app.listen(3000, () => {
    console.log('Aplicação rodando em https://localhost:3000');
})