const { decimalToRomanNumeral } = require('./functions');

test('should return IX when 9 is input', ()=> {
    expect(decimalToRomanNumeral(9)).toBe('IX')
})