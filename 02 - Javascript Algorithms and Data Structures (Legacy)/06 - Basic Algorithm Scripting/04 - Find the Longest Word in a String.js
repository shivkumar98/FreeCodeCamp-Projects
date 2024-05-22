// --------------- Find the Longest Word in a String --------------- \
function findLongestWordLength(str) {
    let splitList = str.split(" ")
    let longest = 0
    for (let i = 0; i < splitList.length; i ++){
        let stringLength = splitList[i].length
        if (stringLength>longest){
            longest = stringLength
        }
    }
    return longest
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
    
// --------------- Find the Longest Word in a String --------------- \