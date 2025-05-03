function isPhoneNumberValid(phoneNumber) {
    const phoneNumberSplit = phoneNumber.split("")
    if (phoneNumberSplit[0] == "-") return false
    const digitsOfPhoneNumberOnly = phoneNumberSplit.filter((a) => a.match(/\d/));
    const numberOfDigits = digitsOfPhoneNumberOnly.length
    if (numberOfDigits < 10 || numberOfDigits > 11) return false
    const countryCodeIsProvided = numberOfDigits == 11;
    const countryCodeDigit = digitsOfPhoneNumberOnly[0];
    if (countryCodeIsProvided && countryCodeDigit != "1") return false
    const numberOfDashes = phoneNumberSplit.filter(char => char === '-').length;
    if (numberOfDashes > 2) return false;
    const numberOfOpeningBrackets = phoneNumberSplit.filter(a => a==='(').length
    const numberOfClosingBrackets = phoneNumberSplit.filter(a => a===')').length
    if (numberOfOpeningBrackets != numberOfClosingBrackets) return false
    const numbersInBrackets = /\((.*?)\)/
    if (numbersInBrackets.test(phoneNumber)) {
        const numberOfDigitsWithinBrackets = phoneNumber.match(numbersInBrackets)[0].length - 2
        if (numberOfDigitsWithinBrackets != 3) return false
    }
    
    const allowDigitsWhiteSpaceBracktsAndDashes = /^[\d\s-()]+$/g
    return allowDigitsWhiteSpaceBracktsAndDashes.test(phoneNumber)
}

const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const results = document.getElementById("results-div")

checkButton.addEventListener("click", (e) => {
    if (userInput.value === "") 
        alert("Please provide a phone number")
    if (isPhoneNumberValid(userInput.value)) {
        results.textContent = "Valid US number: "+userInput.value;
    } else 
        results.textContent = "Invalid US number: "+userInput.value;
})

clearButton.addEventListener("click", (e) => {
    results.innerHTML =  ""
})