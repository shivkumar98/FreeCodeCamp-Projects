// these functions are higher-order functions

// complete the funtion so it returns an array of square values of positive integers

const squareList = arr => {
    return arr
    .filter (i => i==Math.floor(i) && i>=0)
    .map( i => i*i)
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);