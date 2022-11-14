// use the split method the array into words

function splitify(str) {
    // Only change code below this line
    return str.split(/[-+,. ]/)
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");
  
  console.log(splitify("Hello World,I-am code"))
  
  console.log(splitify("This.is.a-sentence"))