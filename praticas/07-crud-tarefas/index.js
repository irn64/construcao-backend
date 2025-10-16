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

// criar uma inteface para o banco de dados - Model
// cada modelo representa uma collection(tabela)
const TarefaModel = mongoose.model('Tarefas', new mongoose.Schema(
    {
        nome: String
    }
))

// CRUD

// Create
app.post('/tarefas', async (req, res, next) => {
    const tarefa = req.body
    if(!tarefa.nome){
        return res.status(400).json({error: 'O campo nome é obrigatório'})
    }
    const tarefaCriada = await TarefaModel.create(tarefa)
    res.status(201).json(tarefaCriada)
})

// Read
app.get('/tarefas', async (req, res, next) => {
    const tarefas = await TarefaModel.find()
    res.json(tarefas)
})

// Update
app.put('/tarefas/:id', async (req, res, next) =>{
    const id = req.params.id
    const tarefa = req.body
    if(!tarefa.nome){
        return res.status(400).json({error: 'O campo nome é obrigatório'})
    }

    const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(id, tarefa, {new: true})
    if(!tarefaAtualizada){
        return res.status(404).json({error: 'Tarefa não encontrada'})
    }
    res.json(tarefaAtualizada)
})

// Delete
app.delete('/tarefas/:id', async (req, res, next) => {
    const id = req.params.id
    await TarefaModel.findByIdAndDelete(id)
    res.json({message: 'Tarefa deletada'})
})

// start
app.listen(3000, () => {
    console.log('Aplicação rodando em https://localhost:3000');
})