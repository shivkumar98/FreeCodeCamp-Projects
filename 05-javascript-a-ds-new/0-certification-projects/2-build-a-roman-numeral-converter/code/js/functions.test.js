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

test('should return XI when 11 is input', ()=> {
    expect(decimalToRomanNumeral(11)).toBe('XI')
})

test('should return XII when 12 is input', ()=> {
    expect(decimalToRomanNumeral(12)).toBe('XII')
})

test('should return XIII when 13 is input', ()=> {
    expect(decimalToRomanNumeral(13)).toBe('XIII')
})

test('should return XIV when 14 is input', ()=> {
    expect(decimalToRomanNumeral(14)).toBe('XIV')
})

test('should return XV when 15 is input', ()=> {
    expect(decimalToRomanNumeral(15)).toBe('XV')
})


test('should return XVI when 16 is input', ()=> {
    expect(decimalToRomanNumeral(16)).toBe('XVI')
})


test('should return XVII when 17 is input', ()=> {
    expect(decimalToRomanNumeral(17)).toBe('XVII')
})

test('should return XVIII when 18 is input', ()=> {
    expect(decimalToRomanNumeral(18)).toBe('XVIII')
})

test('should return XIX when 19 is input', ()=> {
    expect(decimalToRomanNumeral(19)).toBe('XIX')
})

test('should return XX when 20 is input', ()=> {
    expect(decimalToRomanNumeral(20)).toBe('XX')
})

//

test('should return XXI when 21 is input', ()=> {
    expect(decimalToRomanNumeral(21)).toBe('XXI')
})

test('should return XXII when 22 is input', ()=> {
    expect(decimalToRomanNumeral(22)).toBe('XXII')
})

test('should return XXIII when 23 is input', ()=> {
    expect(decimalToRomanNumeral(23)).toBe('XXIII')
})

test('should return XXIV when 24 is input', ()=> {
    expect(decimalToRomanNumeral(24)).toBe('XXIV')
})

test('should return XXV when 25 is input', ()=> {
    expect(decimalToRomanNumeral(25)).toBe('XXV')
})


test('should return XXVI when 16 is input', ()=> {
    expect(decimalToRomanNumeral(26)).toBe('XXVI')
})


test('should return XXVII when 27 is input', ()=> {
    expect(decimalToRomanNumeral(27)).toBe('XXVII')
})

test('should return XXVIII when 28 is input', ()=> {
    expect(decimalToRomanNumeral(28)).toBe('XXVIII')
})
