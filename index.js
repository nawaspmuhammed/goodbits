require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')

const authMiddleware = require('./auth')
const initializeDatabase = require('./database');
require('./client')
const app = express()
app.use(bodyParser.json())
    //app.use(authMiddleware)
app.use(bodyParser.urlencoded({
    extended: true
}));
const startServer = async() => {
    await initializeDatabase(app)

    const port = process.env.SERVER_PORT || 3000
    await promisify(app.listen).bind(app)(port)
    console.log(`Listening on port ${port}`)
}
app.get('/get-token', function(req, res) {
    getToken(req, res);
})
app.get('/employees', authMiddleware, function(req, res) {
    getEmployees(req, res);
})
app.post('/employees/create', authMiddleware, function(req, res) {
    createEmployees(req, res);
})
startServer()