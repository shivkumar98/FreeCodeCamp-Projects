// write a function which takes two or more arrays and returns a new array of unique values in the order of the original provided arrays

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]

function uniteUnique(arr) {
    let returnArr = []
    for (let i=0;i<arguments.length;i++){
      let argument = arguments[i]
      for (let j=0;j<argument.length;j++){
        if (!returnArr.includes(argument[j])){
          returnArr.push(argument[j])
        }
      }
    }
    return returnArr
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))