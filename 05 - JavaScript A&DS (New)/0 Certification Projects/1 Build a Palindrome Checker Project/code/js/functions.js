function removeWhiteSpaceAndSpecialCharacters(input) {
    return input;
}

 function isPalindrome(filteredString) {
    const reversedString = filteredString.split("").reverse();
    return filteredString === reversedString;
}

export { removeWhiteSpaceAndSpecialCharacters, isPalindrome}
module.exports = removeWhiteSpaceAndSpecialCharacters;