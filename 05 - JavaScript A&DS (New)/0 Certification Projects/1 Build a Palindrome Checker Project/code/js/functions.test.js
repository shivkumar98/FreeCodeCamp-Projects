const removeWhiteSpaceAndSpecialCharacters = require('./functions');

test('should return input with no changes when it contains no special characters', ()=> {
    expect(removeWhiteSpaceAndSpecialCharacters('A')).toBe('A')
})