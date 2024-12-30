const { decimalToRomanNumeral } = require('./functions');


test('should return blank when 0 is input', () => {
    expect(decimalToRomanNumeral(0)).toBe('')
})


test('should return I when 1 is input', () => {
    expect(decimalToRomanNumeral(1)).toBe('I')
})

test('should return II when 2 is input', () => {
    expect(decimalToRomanNumeral(2)).toBe('II')
})

test('should return III when 3 is input', () => {
    expect(decimalToRomanNumeral(3)).toBe('III')
})

test('should return IV when 4 is input', () => {
    expect(decimalToRomanNumeral(4)).toBe('IV')
})

test('should return V when 5 is input', () => {
    expect(decimalToRomanNumeral(5)).toBe('V')
})

test('should return VI when 6 is input', () => {
    expect(decimalToRomanNumeral(6)).toBe('VI')
})

test('should return VII when 7 is input', () => {
    expect(decimalToRomanNumeral(7)).toBe('VII')
})

test('should return VIII when 8 is input', () => {
    expect(decimalToRomanNumeral(8)).toBe('VIII')
})

test('should return IX when 9 is input', ()=> {
    expect(decimalToRomanNumeral(9)).toBe('IX')
})

test('should return X when 10 is input', ()=> {
    expect(decimalToRomanNumeral(10)).toBe('X')
})
