function isPhoneNumberValid(phoneNumber) {
    const validPhoneNumber = /[\d()-]/g
    return validPhoneNumber.test(phoneNumber)
}

module.exports = { isPhoneNumberValid }
 