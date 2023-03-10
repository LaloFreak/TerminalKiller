const express = require('express')
const server = express.Router()
const { getPosts } = require('../../Controllers/index.js')

server.get('/', async (req, res) => {
    const media = await getPosts()
    return res.status(200).send(media)
})

server.get('/:id', async (req, res) => {
    let {id} = req.params
    let media = await getPosts().then(res => res.filter(el => {return el.id === +id}))
    if (media) return res.send(media)
    res.status(400).send("El id ingresado es incorrecto")
})

module.exports = server