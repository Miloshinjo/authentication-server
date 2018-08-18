// Main starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')
const mongoose = require('mongoose')

// starting a mongo db server - "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="PATH OF DATABASE"
// connect to mongo, database path - "D:\kodiranje\JavaScript\React\Advanced React and Redux 2018\authentication\server\data\db"

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth') // connect to a mongo db on our path
// App Setup - getting express working
app.use(morgan('combined')) // express middleware (any incoming request gets passed here first) - purpose: logs incoming requests
app.use(bodyParser.json()) // express middleware (any incoming request gets passed here first) - purpose: parse incoming requests into json, no matter what the type is.
router(app)

// Server Setup - getting express to talk to outside world
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)

console.log('Server listening on:', port)

// Robo Mongo - fantastic tool to peak into the mongo database instead of console lines