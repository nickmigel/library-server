const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const savedSongsRouter = require('./savedSongs/savedSongs')

const server = express()

server.use(cors())
server.use(helmet())

server.use(express.json())

server.use('api/saved', savedSongsRouter)

module.exports = server