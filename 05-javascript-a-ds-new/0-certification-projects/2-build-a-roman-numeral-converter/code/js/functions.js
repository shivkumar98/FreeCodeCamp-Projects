function decimalToRomanNumeral(input) {
    if (input === 0) {
        return "";
    } 
    if (input <=10) {
        if (input<=3) {
            return "I".repeat(input)
        } else if (input==4) {
            return "IV"
        } else if (input==5) {
            return "V"
        } else if (input >=6 && input <= 8) {
            return "V"+ decimalToRomanNumeral(input-5);
        } else if (input == 9) {
            return "IX"
        } else {
            return "X"
        }
    } else if (input >=11 && input <=20) {
        return "X" + decimalToRomanNumeral(input-10)
    }
}

module.exports = { decimalToRomanNumeral}
 