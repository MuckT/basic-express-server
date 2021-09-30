'use strict'

const supertest = require('supertest')
const server = require('./server')
const request = supertest(server.app)

describe('Given /person', () => {
  describe('When no query string', () => {
    it('Then returns 500 status', async () => {
      const response = await request.get('/person?test=test')
      expect(response.status).toEqual(500)
    })
  })

  describe('When name is in query string', () => {
    it('Then returns 200 status', async () => {
      const response = await request.get('/person?name=fred')
      expect(response.status).toEqual(200)
    })

    it('Then returns correct response body', async () => {
      const response = await request.get('/person?name=fred')
      expect(response.body).toStrictEqual({name: 'fred'})
    })
  })
})
