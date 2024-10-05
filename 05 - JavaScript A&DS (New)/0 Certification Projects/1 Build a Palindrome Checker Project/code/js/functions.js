function removeWhiteSpaceAndSpecialCharacters(input) {
    const lowerCased = input.toLowerCase()
    return lowerCased.replace(/[_,.\s]/gi, '');
}

function isPalindrome(filteredString) {
    const reversedString = filteredString.split("").reverse().join("");
    return filteredString === reversedString;
}

module.exports = { removeWhiteSpaceAndSpecialCharacters, isPalindrome }
 