// --------------- Repeat a String --------------- \
function repeatStringNumTimes(str, num) {
    if (num <= 0){ return "" }
    else if (num == 1) {
        return str
    }
    else {
        let repeatedString=""
        for (let i = 0; i < num ; i++){
            repeatedString+= str
        }
        return repeatedString
    }
}
  
  repeatStringNumTimes("abc", 3);
    
// --------------- Repeat a String --------------- \