function removeWhiteSpaceAndSpecialCharacters(input) {
    return input;
}

 function isPalindrome(filteredString) {
    const reversedString = filteredString.split("").reverse();
    return filteredString === reversedString;
}

module.exports = removeWhiteSpaceAndSpecialCharacters;