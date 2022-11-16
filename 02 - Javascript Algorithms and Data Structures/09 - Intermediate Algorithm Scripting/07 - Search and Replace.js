// perform search and replace on the sentence provided (first argument)
// the search is provided by the second argument
// the replace is provided by the third argument

function myReplace(str, before, after) {
    if (before[0].toLowerCase()==before[0]){
      return str.replace(before, after[0].toLowerCase()+after.slice(1))
    } else if (before[0].toUpperCase()==before[0]){
      return str.replace(before, after[0].toUpperCase()+after.slice(1))
    }
    return str.replace(before, after)
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))