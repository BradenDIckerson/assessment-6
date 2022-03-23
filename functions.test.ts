const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Should shuffle the deck', () => {
        expect(shuffleArray).toEqual(shuffleArray)
    })


    test("Should have 6 choices selected.", () => {
        expect(shuffleArray).toEqual(6)
    })
})