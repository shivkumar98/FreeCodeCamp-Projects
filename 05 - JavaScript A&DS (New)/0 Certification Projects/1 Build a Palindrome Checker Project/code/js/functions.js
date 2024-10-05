function removeWhiteSpaceAndSpecialCharacters(input) {
    return desired = input.replace(/[_,.\s]/gi, '');
}

function isPalindrome(filteredString) {
    const reversedString = filteredString.split("").reverse().join("");
    return filteredString === reversedString;
}

module.exports = { removeWhiteSpaceAndSpecialCharacters, isPalindrome }
 