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

test('only the area code should be surrounded in brackets', () => {
    expect(isPhoneNumberValid("(6054756961)")).toBe(false)
});

test('if country code is provided, should return false if it is one', ()=> {
    expect(isPhoneNumberValid("2 757 622-7382")).toBe(false)
})

test('if country code is provided, should return true, if it is 1', () => {
    expect(isPhoneNumberValid("1 555-555-5555")).toBe(true)
})

test('Should return true if no country code provided, no special characters or spaces',     () => {
    expect(isPhoneNumberValid("5555555555")).toBe(true)
})

test('Should return true if no country code is provided and area code is split by dashes', () => {
    expect(isPhoneNumberValid("555-555-5555")).toBe(true)
})

test('Should return true if area code is in brackets, and rest is split by dash', () => {
    expect(isPhoneNumberValid("(555)555-5555")).toBe(true)
})

test('should return false if no country code is provided  and there is more than 2 dashes', () => {
    expect(isPhoneNumberValid("55 55-55-555-5")).toBe(false)
})

test('Should return false if more than 11 digits', () => {
    expect(isPhoneNumberValid("11 555-555-5555")).toBe(false)
})

test('Should return false when first character is dash', () => {
    expect(isPhoneNumberValid("-1 102 021 3377")).toBe(false);
})

test('Should return true', () => {
    expect(isPhoneNumberValid("1 (342) 324-5763")).toBe(true);  
})