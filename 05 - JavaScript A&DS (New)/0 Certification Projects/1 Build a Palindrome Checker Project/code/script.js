function removeWhiteSpaceAndSpecialCharacters(input) {
    return input.replace(/[_,.]/gi, '');
}

function isPalindrome(filteredString) {
    const reversedString = filteredString.split("").reverse().join("");
    return filteredString === reversedString;
}


/* getting the form element, so i cann listen to when 
   it is submitted
*/

const palindromeChecker = document.getElementById("palindrome-checker");

palindromeChecker.addEventListener("submit", palindromeCheck);

function palindromeCheck(e) {
    e.preventDefault(); // stop form from being submitted

    const textInput = document.getElementById("text-input").value
    const result = document.getElementById("result");

    console.log("check clicked")
    console.log(textInput)

    if (textInput.length === 0) 
        alert("Please input a value")

    const filteredTextInput = removeWhiteSpaceAndSpecialCharacters(textInput);
    console.log(filteredTextInput)
    const isFilteredInputPalindrome = isPalindrome(filteredTextInput)
    console.log(isFilteredInputPalindrome)

    if (isFilteredInputPalindrome) {
        result.textContent = textInput + " is a Palindrome"
    } else {
        result.textContent = textInput + " is not a Palindrome"
    }
    

    console.log(filteredTextInput)
    console.log(isPalindrome)
    
}
