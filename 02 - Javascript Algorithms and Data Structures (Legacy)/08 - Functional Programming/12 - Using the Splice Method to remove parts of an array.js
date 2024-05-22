// rewrite the nonMutatingSplice by using slice

// it should limit the provided cities array to a length of 3 and return a new array with only the first 3 items

function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
    // Only change code above this line
  }
  
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
 nonMutatingSplice(inputCities);