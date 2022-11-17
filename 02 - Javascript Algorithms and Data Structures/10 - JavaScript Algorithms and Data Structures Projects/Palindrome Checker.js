/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

// My solution:

function palindrome(str) {
    let split = str.replace(/[^a-z0-9]/ig,"")
    .replace(/\s/, "")
    .toLowerCase()
    .split("")
    console.log("split: "+split)
    if (split.length==0) return true
    for (let i=0; i<split.length;i++){
      if (split[i]!=split[split.length-1-i]){
        return false
      }
    }
    return true
  }
  
console.log(palindrome("1 eye for of 1 eye."))

console.log(palindrome("My age is 0, 0 si ega ym."))