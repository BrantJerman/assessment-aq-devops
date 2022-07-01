const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    test('should return an array', () => {
        expect(shuffleArray()).not.toBe([3,23,56,32,8,67,78])
    })
    test('it should return an arry w same length ', () => {
        expect(shuffleArray().length).toBe([3,23,56,32,8,67,78].length)
    })
})