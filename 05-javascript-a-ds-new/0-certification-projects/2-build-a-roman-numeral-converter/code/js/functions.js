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
    } else if (input >=50 && input <=59) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "L" + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=60 && input <=69) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LX" + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=70 && input <=79) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LXX" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
}

module.exports = { decimalToRomanNumeral}
 