const express = require('express')
const Games = require('../games/gamesModel')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json('hello')
})

server.get('/games', async(req, res)=> {
    Games.getAll() 
        .then(game => {
            res.status(200).json(game)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.post('/games', async(req, res) => {
    if(!req.body.title || !req.body.genre || !req.body.releaseYear){
        res.status(500).json({message: "Please don't leave fields empty"})
    } else {
        Games.add(req.body)
            .then(game =>[
                res.status(200).json(game)
            ])
    }
})

module.exports = server