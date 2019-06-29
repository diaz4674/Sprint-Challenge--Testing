const request = require('supertest')
const server = require('./server')

describe('testing the server', () => {


    it('should set the test env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', () =>{
        it('should return 200 ', () =>{
           return request(server).get('/')
            .then(res=>{
                expect(res.status).toBe(200)
            })
        })
        it('should return 404 not found', () => {
            return request(server).get('/nope').then(res => {
                expect(res.status).toBe(404)
            })
        })
    })


})