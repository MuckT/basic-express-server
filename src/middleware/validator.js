'use strict'

// Sends the request through when valid otherwise throws an error
const validator = (req, res, next) => {
  if(!req.query.name) {throw new Error('Name Query Invalid')}
  next()
}

module.exports = validator
