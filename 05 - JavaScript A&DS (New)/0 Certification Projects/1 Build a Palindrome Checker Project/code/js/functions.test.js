const removeWhiteSpaceAndSpecialCharacters = require('./removeWhiteSpaceAndSpecialCharacters')

test('should return input with no changes when it contains no special characters', ()=> {
    expect(removeWhiteSpaceAndSpecialCharacters('A')).toBe('A')
})