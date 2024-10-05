const { removeWhiteSpaceAndSpecialCharacters, isPalindrome } = require('./functions');

test('should return input with no changes when it contains no special characters', ()=> {
    expect(removeWhiteSpaceAndSpecialCharacters('A')).toBe('a')
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

test('should return racecar when race car is inputted', () => {
    expect(removeWhiteSpaceAndSpecialCharacters('race car')).toBe('racecar')
});


test('should return amanaplanacanalpanama when A man, a plan, a canal. Panama is inputted', () => {
    expect(removeWhiteSpaceAndSpecialCharacters('A man, a plan, a canal. Panama')).toBe('amanaplanacanalpanama')
});


test('should return 0000', () => {
    expect(removeWhiteSpaceAndSpecialCharacters('0_0 (: /-\\ :) 0-0')).toBe('0000')
});

test('should return true when myageis00siegaym is inputted', () => {
    expect(isPalindrome('myageis00siegaym')).toBeTruthy();
})