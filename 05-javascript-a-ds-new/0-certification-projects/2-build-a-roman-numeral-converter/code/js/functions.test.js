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

// 20-21
test('should return XX when 20 is input', ()=> {
    expect(decimalToRomanNumeral(20)).toBe('XX')
})
test('should return XXI when 21 is input', ()=> {
    expect(decimalToRomanNumeral(21)).toBe('XXI')
})
test('should return XXIX when 29 is input', ()=> {
    expect(decimalToRomanNumeral(29)).toBe('XXIX')
})

// 30-39:
test('should return XXX when 30 is input', ()=> {
    expect(decimalToRomanNumeral(30)).toBe('XXX')
})
test('should return XXXIX when 39 is input', ()=> {
    expect(decimalToRomanNumeral(39)).toBe('XXXIX')
})

// 40-49:
test('should return XL when 40 is input', ()=> {
    expect(decimalToRomanNumeral(40)).toBe('XL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(49)).toBe('XLIX')
})

// 50-59:
test('', ()=> {
    expect(decimalToRomanNumeral(50)).toBe('L')
})
test('', ()=> {
    expect(decimalToRomanNumeral(59)).toBe('LIX')
})

// 60-69
test('', ()=> {
    expect(decimalToRomanNumeral(60)).toBe('LX')
})
test('', ()=> {
    expect(decimalToRomanNumeral(69)).toBe('LXIX')
})

// 70-79:
test('', ()=> {
    expect(decimalToRomanNumeral(70)).toBe('LXX')
})
test('', ()=> {
    expect(decimalToRomanNumeral(79)).toBe('LXXIX')
})

// 80-89
test('', ()=> {
    expect(decimalToRomanNumeral(80)).toBe('LXXX')
})
// 90 - 99:
test('', ()=> {
    expect(decimalToRomanNumeral(90)).toBe('XC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(99)).toBe('XCIX')
})

// 100-199:
test('', ()=> {
    expect(decimalToRomanNumeral(100)).toBe('C')
})
test('', ()=> {
    expect(decimalToRomanNumeral(105)).toBe('CV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(115)).toBe('CXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(150)).toBe('CL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(199)).toBe('CXCIX')
})

// 200-299:
test('', ()=> {
    expect(decimalToRomanNumeral(200)).toBe('CC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(205)).toBe('CCV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(215)).toBe('CCXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(250)).toBe('CCL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(299)).toBe('CCXCIX')
})
// 300-399:
test('', ()=> {
    expect(decimalToRomanNumeral(300)).toBe('CCC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(305)).toBe('CCCV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(315)).toBe('CCCXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(350)).toBe('CCCL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(399)).toBe('CCCXCIX')
})

// 400-499:
test('', ()=> {
    expect(decimalToRomanNumeral(400)).toBe('CD')
})
test('', ()=> {
    expect(decimalToRomanNumeral(405)).toBe('CDV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(415)).toBe('CDXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(450)).toBe('CDL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(499)).toBe('CDXCIX')
})
// 500-599:
test('', ()=> {
    expect(decimalToRomanNumeral(500)).toBe('D')
})
test('', ()=> {
    expect(decimalToRomanNumeral(505)).toBe('DV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(515)).toBe('DXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(550)).toBe('DL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(599)).toBe('DXCIX')
})
// 600-699:
test('', ()=> {
    expect(decimalToRomanNumeral(600)).toBe('DC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(605)).toBe('DCV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(615)).toBe('DCXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(650)).toBe('DCL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(699)).toBe('DCXCIX')
})
// 700-799:
test('', ()=> {
    expect(decimalToRomanNumeral(700)).toBe('DCC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(705)).toBe('DCCV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(715)).toBe('DCCXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(750)).toBe('DCCL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(799)).toBe('DCCXCIX')
})
// 800-899:
test('', ()=> {
    expect(decimalToRomanNumeral(800)).toBe('DCCC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(805)).toBe('DCCCV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(815)).toBe('DCCCXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(850)).toBe('DCCCL')
})
test('', ()=> {
    expect(decimalToRomanNumeral(899)).toBe('DCCCXCIX')
})
 // 900 - 999
 test('', ()=> {
    expect(decimalToRomanNumeral(900)).toBe('CM')
})
test('', ()=> {
    expect(decimalToRomanNumeral(999)).toBe('CMXCIX')
})
// 1000 - 1099
 test('', ()=> {
    expect(decimalToRomanNumeral(1000)).toBe('M')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1099)).toBe('MXCIX')
})

// 1100 - 1199
test('', ()=> {
    expect(decimalToRomanNumeral(1100)).toBe('MC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1199)).toBe('MCXCIX')
})

// 1200 - 1299
test('', ()=> {
    expect(decimalToRomanNumeral(1200)).toBe('MCC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1299)).toBe('MCCXCIX')
})

// 1300 - 1399
test('', ()=> {
    expect(decimalToRomanNumeral(1300)).toBe('MCCC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1399)).toBe('MCCCXCIX')
})


// 1400 - 1499
test('', ()=> {
    expect(decimalToRomanNumeral(1400)).toBe('MCD')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1499)).toBe('MCDXCIX')
})

// 1500 - 1599
test('', ()=> {
    expect(decimalToRomanNumeral(1500)).toBe('MD')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1599)).toBe('MDXCIX')
})

// 1600 - 1699
test('', ()=> {
    expect(decimalToRomanNumeral(1600)).toBe('MDC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1699)).toBe('MDCXCIX')
})

// 1700 - 1799
test('', ()=> {
    expect(decimalToRomanNumeral(1700)).toBe('MDCC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1799)).toBe('MDCCXCIX')
})

// 1800 - 1899
test('', ()=> {
    expect(decimalToRomanNumeral(1800)).toBe('MDCCC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1899)).toBe('MDCCCXCIX')
})

// 1900 - 1999
test('', ()=> {
    expect(decimalToRomanNumeral(1900)).toBe('MCM')
})
test('', ()=> {
    expect(decimalToRomanNumeral(1999)).toBe('MCMXCIX')
})

// 2000 - 2999
test('', ()=> {
    expect(decimalToRomanNumeral(2000)).toBe('MM')
})
test('', ()=> {
    expect(decimalToRomanNumeral(2999)).toBe('MMCMXCIX')
})

// 3000 - 3999
test('', ()=> {
    expect(decimalToRomanNumeral(3000)).toBe('MMM')
})
test('', ()=> {
    expect(decimalToRomanNumeral(3999)).toBe('MMMCMXCIX')
})
