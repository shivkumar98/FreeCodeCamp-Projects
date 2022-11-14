// the every method returns true if all elements of an array pass true

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every(i=>i>0)
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);

// the some() method checks if there is atleast one element which passes the test

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.some(i=>i>0)
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);