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
    } else if (input >=100 && input<=399) {
        let numberOfHundreds = Math.floor(input/100 % 100)
        return "C".repeat(numberOfHundreds) + decimalToRomanNumeral(input-(100*numberOfHundreds));
    } else if (input >=400 && input <=499) {
        return "CD" + decimalToRomanNumeral(input - 400)
    } else if (input >=500 && input <=899) {
        let numberOfHundredsAbove500 = Math.floor((input-500)/100 % 100)
        return "D"+ "C".repeat(numberOfHundredsAbove500) + decimalToRomanNumeral(input-(100*numberOfHundredsAbove500)-500)
    } else if (input >=900 && input <=999) {
        return "CM"+decimalToRomanNumeral(input-900)
    } else if (input >=1000 && input <=1399) {
        let numberOfHundredsAbove1000 = Math.floor((input-1000)/100 % 100)
        return "M"+"C".repeat(numberOfHundredsAbove1000)+decimalToRomanNumeral(input-1000-(100*numberOfHundredsAbove1000));
    } else if (input >=1400 && input <=1499) {
        return "MCD" + decimalToRomanNumeral(input-1400);
    } else if (input >=1500 && input <=1899) {
        let numberOfHundredsAbove1500 = Math.floor((input-1500)/100 % 100)
        return "MD"+"C".repeat(numberOfHundredsAbove1500)+decimalToRomanNumeral(input-1500-(100*numberOfHundredsAbove1500));
    } else if (input >=1900 && input <=1999) {
        return "MCM"+decimalToRomanNumeral(input-1900);
    } else if (input >=2000 && input <=3999) {
        let numberOfThousandths = Math.floor(input/1000 % 1000)
        return "M".repeat(numberOfThousandths)+decimalToRomanNumeral(input-(1000*numberOfThousandths));
    }
}

module.exports = { decimalToRomanNumeral}
 