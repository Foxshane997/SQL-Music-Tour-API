// Dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// Config / Middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Root
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API SF'
    })
})

// Controllers
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)


// Port Listener
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})