const removeWhiteSpaceAndSpecialCharacters = require('./functions');
const isPalindrome = require('./functions');

test('should return input with no changes when it contains no special characters', ()=> {
    expect(removeWhiteSpaceAndSpecialCharacters('A')).toBe('A')
})

test('should return true when evaluating A is a palindrome', () => {
    expect(isPalindrome('A')).toBeTruthy()
});