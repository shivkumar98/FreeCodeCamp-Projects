function isPhoneNumberValid(phoneNumber) {
    const phoneNumberSplit = phoneNumber.split("")
    const numberOfDigits = phoneNumberSplit.filter((a) => a.match(/\d/)).length
    if (numberOfDigits < 10) return false
    const numberOfOpeningBrackets = phoneNumberSplit.filter(a => a==='(').length
    const numberOfClosingBrackets = phoneNumberSplit.filter(a => a===')').length
    if (numberOfOpeningBrackets != numberOfClosingBrackets)
        return false
    const numbersInBrackets = /\((.*?)\)/
    if (numbersInBrackets.test(phoneNumber)) {
        const firstLetterAfterOpeningBracket = phoneNumber.match(/\((.*?)\)/)[0][1]
        if (firstLetterAfterOpeningBracket != '5') return false
    }
    
    const validPhoneNumber = /^[\d\s-()]+$/g
    return validPhoneNumber.test(phoneNumber)
}

export { isPhoneNumberValid };
 