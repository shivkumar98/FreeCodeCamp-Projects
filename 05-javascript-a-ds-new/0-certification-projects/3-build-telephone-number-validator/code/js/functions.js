function isPhoneNumberValid(phoneNumber) {
    const phoneNumberSplit = phoneNumber.split("")
    if (phoneNumberSplit[0] == "-") return false
    const digitsOfPhoneNumberOnly = phoneNumberSplit.filter((a) => a.match(/\d/));
    const numberOfDigits = digitsOfPhoneNumberOnly.length
    if (numberOfDigits < 10 || numberOfDigits > 11) return false
    const numberOfDashes = phoneNumberSplit.filter(char => char === '-').length;
    if (numberOfDashes > 2) 
        return false;
    const countryCodeIsProvided = numberOfDigits == 11;
    if (countryCodeIsProvided) {
        const countryCodeDigit = digitsOfPhoneNumberOnly[0];
        if (countryCodeDigit != "1")
            return false;
    }
    const numberOfOpeningBrackets = phoneNumberSplit.filter(a => a==='(').length
    const numberOfClosingBrackets = phoneNumberSplit.filter(a => a===')').length
    if (numberOfOpeningBrackets != numberOfClosingBrackets)
        return false
    const numbersInBrackets = /\((.*?)\)/
    if (numbersInBrackets.test(phoneNumber)) {
        const numberOfDigitsWithinBrackets = phoneNumber.match(/\((.*?)\)/)[0].length - 2
        if (numberOfDigitsWithinBrackets != 3) return false
    }
    
    const validPhoneNumber = /^[\d\s-()]+$/g
    return validPhoneNumber.test(phoneNumber)
}

export { isPhoneNumberValid };
 