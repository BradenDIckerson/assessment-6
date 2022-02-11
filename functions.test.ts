const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Should shuffle the deck', () => {
        expect(shuffleArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id:0 - 6})
            ])
        )
    })


    test("Should have 6 choices selected.", () => {
        expect(shuffleArray).toEqual(6)
    })
})