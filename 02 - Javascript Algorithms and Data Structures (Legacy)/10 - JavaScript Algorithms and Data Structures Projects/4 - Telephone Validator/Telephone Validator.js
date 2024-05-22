function telephoneCheck(str) {
    let numberArr = str.split("").map(i=>parseInt(i)).filter(i=>i||i==0)
    let numberOfDigits = numberArr.length
  
    if ((/[^0-9()\- ]/g.test(str))){ // if there is a non-valid character
      return false
    }
  
    if (/[ -]\d\d[ -]/g.test(str)){ // if there are 2 numbers surrounded with - or a space
      return false
    }
  
    if (str.includes("(")||str.includes(")")){
      if (str[0]=="(" && str[str.length-1] == ")"){ // if number is surrounded by brackets
        return false
      }
      if(!(/\((.*?)\)/g.test(str))){ // if there is an invalid bracket
        return false
      }
    }
  
    if (numberOfDigits==11 && numberArr[0]!="1"){
      console.log("must begin with 1 if giving country code")
      return false;
    }
   
    if (numberOfDigits<10 || numberOfDigits>11){ // should be minimum 10 digits or 11 digits
      return false
    }
    if (numberOfDigits===11 && numberArr[0]!=1){ // if country code is not 1
       return false 
    }
   if (str[0] == "-"){
      return false
    } 
  
    if (numberArr[0]==1 && numberOfDigits==11){
      console.log("valid")
      return true
    }
   
    return true
  }
  
  
  // console.log(telephoneCheck(telephoneCheck("123**&!!asdf#"))) // false => pass
  
  // console.log(telephoneCheck("1 555-555-5555")) // true => pass
  
  // console.log(telephoneCheck("2 (757) 622-7382")) // false => pass
  
  // console.log(telephoneCheck("1(555)555-5555"))// should be false
  
  // console.log(telephoneCheck("0 (757) 622-7382")) // false=>pass
  
  // console.log(telephoneCheck("(6054756961)")) // false => pass
  
  // console.log(telephoneCheck("-1 (757) 622-7382")) // false => pass
  
  // console.log(telephoneCheck("10 (757) 622-7382")) false => pass
  
  // console.log(telephoneCheck("55 55-55-555-5")) // false => pass