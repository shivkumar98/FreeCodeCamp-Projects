function convertToRoman(num) {
    if (num<=3){
      return "I".repeat(num)
    } else if (num==4){
      return "IV"
    } else if (num>=5 && num<=8){
      return "V"+"I".repeat(num - 5) 
    } else if (num==9) {
      return "IX"
    } else if (num>=10 && num<=13){
      return "X"+ "I".repeat(num-10)
    } else if (num==14){
      return "X"+convertToRoman(num-10)
    } else if (num>=15&&num<=19){
      
    }
    
   
   }