function decimalToRomanNumeral(input) {
    if (input === 0) {
        return "";
    } 
    if (input <=9) {
        if (input<=3) {
            return "I".repeat(input)
        } else if (input==4) {
            return "IV"
        } else if (input==5) {
            return "V"
        } else if (input >=6 && input <= 8) {
            return "V"+ decimalToRomanNumeral(input-5);
        } else {
            return "IX"
        } 
    } else if (input >=10 && input <=39) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "X".repeat(numberOfTens) + decimalToRomanNumeral(input-(10*numberOfTens))
    } else if (input >=40 && input <=49) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "XL" + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=50 && input <=89) {
        let numberOfTens = Math.floor(input/10 % 10)
        let numberOfTensAbove50 = Math.floor((input-50)/10 % 10)
        return "L" +"X".repeat(numberOfTensAbove50) + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=90 && input <=99) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "XC" + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=100 && input<=199) {
        return "C" + decimalToRomanNumeral(input-100);
    }
}

module.exports = { decimalToRomanNumeral}
 