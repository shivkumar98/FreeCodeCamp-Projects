const { isPhoneNumberValid } = require('./functions');

test('should allow numbers, spaces and dashes', () => {
    expect(isPhoneNumberValid("1 555-555-5555")).toBe(true)
})

test('should not allow special characters or letters', () => {
    expect(isPhoneNumberValid("123**&!!asdf#")).toBe(false)
})

test('should allow numbers in brackets', () => {
    expect(isPhoneNumberValid("1 (555) 555-5555")).toBe(true)
})

test('should have a minimum of 10 digits', () => {
    expect(isPhoneNumberValid("555 555 555")).toBe(false)
})

test('should have equal number of opening and closing brackets', () => {
    expect(isPhoneNumberValid("1 555)555-5555")).toBe(false)
})