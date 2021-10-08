'use strict'

const validator = require('../middleware/validator')

describe('Given logger', () => {
  describe('When called', () => {
    it('Then passes to next function', async () => {
      let requestObject = {
        query: {
          name: 'fred'
        }
      }
      let responseObject = {};
      let nextFunction = jest.fn();
    
      validator(requestObject, responseObject, nextFunction)
      expect(nextFunction).toHaveBeenCalled()
    })

    it('Then can throw error', () => {
      let requestObject = {
        query: {
          test: 'test'
        }
      }
      let responseObject = {}
      let nextFunction = jest.fn();

      expect(() => validator(requestObject, responseObject, nextFunction)).toThrow(Error)
      expect(() => validator(requestObject, responseObject, nextFunction)).toThrow("Name Query Invalid")
    })
  })
})
