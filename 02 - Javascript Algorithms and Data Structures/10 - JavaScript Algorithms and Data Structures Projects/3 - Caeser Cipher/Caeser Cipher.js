function rot13(str) {
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
    let coded = str.split("")
    return coded.map(x=>shift(x)).join("")
  
    function shift(x){
      let index = alphabet.indexOf(x)
      if (index == -1){ return x}
      if (index<(26-13)){
        return alphabet[index+13]
      } else return alphabet[index+13-26]
    }
  }
  
  console.log(rot13("SERR PBQR PNZC"))