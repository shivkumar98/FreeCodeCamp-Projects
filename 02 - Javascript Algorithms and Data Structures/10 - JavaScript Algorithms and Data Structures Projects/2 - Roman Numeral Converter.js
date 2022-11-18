function convertToRoman(num) {
  console.log("num: "+num)
  let numberOfTens = Math.floor(num/10)
  let numberOfTensPast50 = Math.floor ((num-50)/10)
  let numberOf100s = Math.floor(num/100)
  let numberOf100sPast500 = Math.floor(num-500)
 if (num<=3){
   return "I".repeat(num)
 } else if (num==4){
   return "IV"
 } else if (num>=5 && num<=8){
   return "V"+convertToRoman(num-5)
 } else if (num==9) {
   return "IX"
 } else if (num>=10 && num<=39){
   return "X".repeat(numberOfTens) + convertToRoman(num-10*(numberOfTens))
 } else if (num>=40 &&num<=49){ //edge case
   return "XL"+convertToRoman(num-10*(numberOfTens)) 
 } else if (num>=50 && num<=89){
   return "L" + "X".repeat(numberOfTensPast50) + convertToRoman(num-10*(numberOfTens))
 } else if (num>=90 && num<=99){ //edge case
   return "XC" + convertToRoman(num-90)
 } else if (num>=100 && num<=399){
   return "C".repeat(numberOf100s) + convertToRoman(num-(100*numberOf100s))
 } else if (num>=400 && num<499){ // edge case
   return "CD" + convertToRoman(num-400)
 } else if (num>=500 && num<=899){
   return "D" + convertToRoman(num-500)
 }
}
