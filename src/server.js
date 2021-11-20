'use strict'

// Require express
const express = require('express')

// Assign express to app
const app = express()

// Use JSON response
app.use(express.json())

// Import handlers
const notFound = require('./error-handlers/404')
const error = require('./error-handlers/500')

// Import middleware
const logger = require('./middleware/logger')
const validator = require('./middleware/validator')

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.get('/bad', (req, res, next) => {
  next('you\'ve messed up')
});

// Person route with validation
app.get('/person', validator, (req, res) => {
  let response = {
    name: req.query.name
  }
  res.status(200).json(response)
})

// Handlers
app.use('*', notFound)
app.use(error)

// Application middleware
app.use(logger)

// Export modules
module.exports = {
  app: app,
  start: port => app.listen(port, console.log(`Server Started on Port ${port}`))
}
