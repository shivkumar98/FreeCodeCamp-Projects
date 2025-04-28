function isPhoneNumberValid(phoneNumber) {
    const numberOfDigits = phoneNumber.split("").filter((a) => a.match(/\d/)).length
    if (numberOfDigits < 10) return false
    const validPhoneNumber = /^[\d\s-()]+$/g
    return validPhoneNumber.test(phoneNumber)
}

export { isPhoneNumberValid };
 