function convertToRoman(num) {
  let numberOfTens = Math.floor(num/10)
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
 } else if (num>=40 &&num<49){
   return "XL"+convertToRoman(num-10*(numberOfTens))
 } else if (num>=50 && num <=59){
   return "L"+convertToRoamn(num-10*(numberOfTens))
 } else if (num>=60 && num<=69){
   return "LX" + convertToRoman(num-10*(numberOfTens))
 } else if (num>=70 && num<=79){
   return "L" + convertToRoman(num-50)
 } else if (num>=80 && num<=89){
   return "L" +"X".repeat(Math.floor((num-50) / 10))+ convertToRoman(num-10*numberOfTens)
 }

}