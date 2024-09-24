/* getting the form element, so i cann listen to when 
   it is submitted
*/
const palindromeChecker = document.getElementById("palindrome-checker");
const textInput = document.getElementById("text-input").value

palindromeChecker.addEventListener("submit", palindromeCheck);

function palindromeCheck(e) {
    e.preventDefault(); // stop form from being submitted

    console.log("check clicked")
    console.log(textInput)

    if (textInput.length === 0) 
        alert("Please input a value")

    const filteredTextInput = removeWhiteSpaceAndSpecialCharacters(textInput);
    
}
