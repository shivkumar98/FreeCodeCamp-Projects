// --------------- Finders Keepers Challenge --------------- \
    // look through art and return first element that passes the truth statement
    // the truth statement is supplied by the second argument
    
    function findElement(arr, func) {
        for (let i =0; i<arr.length; i++ ){
          if (func(arr[i])){ return arr[i]}
        }
      }
      
      findElement([1, 2, 3, 4], num => num % 2 === 0);
// --------------- Finders Keepers Challenge --------------- \