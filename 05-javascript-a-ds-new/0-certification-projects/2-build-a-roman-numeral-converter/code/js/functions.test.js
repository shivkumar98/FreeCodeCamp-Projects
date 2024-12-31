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

test('should return XXIX when 29 is input', ()=> {
    expect(decimalToRomanNumeral(29)).toBe('XXIX')
})

// 30-39:

test('should return XXX when 30 is input', ()=> {
    expect(decimalToRomanNumeral(30)).toBe('XXX')
})
test('should return XXXI when 31 is input', ()=> {
    expect(decimalToRomanNumeral(31)).toBe('XXXI')
})
test('should return XXXII when 32 is input', ()=> {
    expect(decimalToRomanNumeral(32)).toBe('XXXII')
})
test('should return XXXIII when 33 is input', ()=> {
    expect(decimalToRomanNumeral(33)).toBe('XXXIII')
})
test('should return XXXIV when 34 is input', ()=> {
    expect(decimalToRomanNumeral(34)).toBe('XXXIV')
})
test('should return XXXV when 35 is input', ()=> {
    expect(decimalToRomanNumeral(35)).toBe('XXXV')
})
test('should return XXXVI when 36 is input', ()=> {
    expect(decimalToRomanNumeral(36)).toBe('XXXVI')
})
test('should return XXXVII when 37 is input', ()=> {
    expect(decimalToRomanNumeral(37)).toBe('XXXVII')
})
test('should return XXXVIII when 38 is input', ()=> {
    expect(decimalToRomanNumeral(38)).toBe('XXXVIII')
})
test('should return XXXIX when 39 is input', ()=> {
    expect(decimalToRomanNumeral(39)).toBe('XXXIX')
})

// 40-49:
test('should return XL when 40 is input', ()=> {
    expect(decimalToRomanNumeral(40)).toBe('XL')
})
test('should return XLI when 41 is input', ()=> {
    expect(decimalToRomanNumeral(41)).toBe('XLI')
})
test('should return XLII when 42 is input', ()=> {
    expect(decimalToRomanNumeral(42)).toBe('XLII')
})
test('should return XLIII when 43 is input', ()=> {
    expect(decimalToRomanNumeral(43)).toBe('XLIII')
})
test('should return XLIV when 44 is input', ()=> {
    expect(decimalToRomanNumeral(44)).toBe('XLIV')
})
test('should return XLV when 45 is input', ()=> {
    expect(decimalToRomanNumeral(45)).toBe('XLV')
})
test('should return XLVI when 46 is input', ()=> {
    expect(decimalToRomanNumeral(46)).toBe('XLVI')
})
test('should return XLVII when 47 is input', ()=> {
    expect(decimalToRomanNumeral(47)).toBe('XLVII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(48)).toBe('XLVIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(49)).toBe('XLIX')
})

// 50-59:
test('', ()=> {
    expect(decimalToRomanNumeral(50)).toBe('L')
})
test('', ()=> {
    expect(decimalToRomanNumeral(51)).toBe('LI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(52)).toBe('LII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(53)).toBe('LIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(54)).toBe('LIV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(55)).toBe('LV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(56)).toBe('LVI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(57)).toBe('LVII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(58)).toBe('LVIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(59)).toBe('LIX')
})

// 60-69
test('', ()=> {
    expect(decimalToRomanNumeral(60)).toBe('LX')
})
test('', ()=> {
    expect(decimalToRomanNumeral(61)).toBe('LXI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(62)).toBe('LXII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(63)).toBe('LXIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(64)).toBe('LXIV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(65)).toBe('LXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(66)).toBe('LXVI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(67)).toBe('LXVII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(68)).toBe('LXVIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(69)).toBe('LXIX')
})

// 70-79:
test('', ()=> {
    expect(decimalToRomanNumeral(70)).toBe('LXX')
})
test('', ()=> {
    expect(decimalToRomanNumeral(71)).toBe('LXXI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(72)).toBe('LXXII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(73)).toBe('LXXIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(74)).toBe('LXXIV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(75)).toBe('LXXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(76)).toBe('LXXVI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(77)).toBe('LXXVII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(78)).toBe('LXXVIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(79)).toBe('LXXIX')
})

// 80-89
test('', ()=> {
    expect(decimalToRomanNumeral(80)).toBe('LXXX')
})
test('', ()=> {
    expect(decimalToRomanNumeral(81)).toBe('LXXXI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(82)).toBe('LXXXII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(83)).toBe('LXXXIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(84)).toBe('LXXXIV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(85)).toBe('LXXXV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(86)).toBe('LXXXVI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(87)).toBe('LXXXVII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(88)).toBe('LXXXVIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(89)).toBe('LXXXIX')
})

// 90 - 99:
test('', ()=> {
    expect(decimalToRomanNumeral(90)).toBe('XC')
})
test('', ()=> {
    expect(decimalToRomanNumeral(91)).toBe('XCI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(92)).toBe('XCII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(93)).toBe('XCIII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(94)).toBe('XCIV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(95)).toBe('XCV')
})
test('', ()=> {
    expect(decimalToRomanNumeral(96)).toBe('XCVI')
})
test('', ()=> {
    expect(decimalToRomanNumeral(97)).toBe('XCVII')
})
test('', ()=> {
    expect(decimalToRomanNumeral(98)).toBe('XCVIII')
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