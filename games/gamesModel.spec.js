const db = require('../data/dbConfig')
const server = require('../server/server')
const Games = require('./gamesModel')
const request = require('supertest')

describe('the games model', () => {

    afterEach(async() => {
        await db('games').truncate()
    })

    describe ('insert()', () => {
        it ('should insert games into the db', async() => {

            await Games.add({title: 'Space Invaders', genre: 'Arcade', releaseYear: 1960 })

            await Games.add({ title: 'Donkey Kong', genre: 'Arcade', releaseYear: 1970 })

            const games = await db('games')
            expect(games).toHaveLength(2)
            expect(games[0].title).toBe('Space Invaders')
        })
        it('should return an empty array', async() => {
            const games = await db('games');
            expect(games).toEqual([]);
        })
    })

    describe('get()', async () => {
        it('should return all games', async() =>{
            await Games.add({ title: 'Street Fighter', genre: 'Action', releaseYear: '1997' })
            
            const games = await Games.getAll()

            expect(games).toHaveLength(1)
        })
        it('should return 200 when receiving correct data', async () => {
            await Games.add({ title: 'Street Fighter', genre: 'Action', releaseYear: '1997' })
            
            return request(server).get('/games')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return an empty array', async() => {
            const games = await db('games');
            expect(games).toEqual([]);
            expect(games).toHaveLength(0)
        })

    })
}) 

