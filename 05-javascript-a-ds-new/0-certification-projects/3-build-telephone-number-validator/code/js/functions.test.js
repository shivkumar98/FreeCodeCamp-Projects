const { isPhoneNumberValid } = require('./functions');

test('should return true', () => {
    expect(isPhoneNumberValid("1 555-555-5555")).toBe(true)
})

test('should return true', () => {
    expect(isPhoneNumberValid("123**&!!asdf#")).toBe(false)
})



