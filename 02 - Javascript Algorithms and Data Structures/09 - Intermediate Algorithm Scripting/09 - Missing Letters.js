// find the missing letter in the passed range

function fearNotLetter(str) {
    let count = 0
    for (let i=0;i<str.length-1;i++){
      if ( str[i+1]==String.fromCharCode(str.charCodeAt(i) + 1)){
        count++
      } else return String.fromCharCode(str.charCodeAt(i) + 1)
    }
    if (count==str.length) return undefined;
  }
  
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));