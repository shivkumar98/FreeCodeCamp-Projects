const { removeWhiteSpaceAndSpecialCharacters, isPalindrome } = require('./functions');

test('should return input with no changes when it contains no special characters', ()=> {
    expect(removeWhiteSpaceAndSpecialCharacters('A')).toBe('A')
})

test('should return true when evaluating A is a palindrome', () => {
    expect(isPalindrome('A')).toBeTruthy()
});

test('should remove underscores from input', ()=> {
    expect(removeWhiteSpaceAndSpecialCharacters('_eye')).toBe('eye')
})


test('should return true when evaluating eye is a palindrome', () => {
    expect(isPalindrome('eye')).toBeTruthy()
});

test('should return false when evaluating a non palindrome', () => {
    expect(isPalindrome('not a palindrome is not a palindrome')).toBeFalsy()
});

test('should racecar when race car is inputted', () => {
    expect(removeWhiteSpaceAndSpecialCharacters('race car')).toBe('racecar')
});

