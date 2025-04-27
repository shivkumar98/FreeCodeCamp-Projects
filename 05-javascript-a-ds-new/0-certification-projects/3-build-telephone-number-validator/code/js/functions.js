function isPhoneNumberValid(phoneNumber) {
    const validPhoneNumber = /^[\d\s-()]+$/g
    return validPhoneNumber.test(phoneNumber)
}

export { isPhoneNumberValid };
 