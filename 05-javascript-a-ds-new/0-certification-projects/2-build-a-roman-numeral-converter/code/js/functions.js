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
    } else if (input >=10 && input <=29) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "X".repeat(numberOfTens) + decimalToRomanNumeral(input-(10*numberOfTens))
    }
}

module.exports = { decimalToRomanNumeral}
 