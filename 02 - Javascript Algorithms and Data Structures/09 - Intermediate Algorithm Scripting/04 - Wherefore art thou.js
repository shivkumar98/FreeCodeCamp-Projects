// make a function that looks through an array of objects (first argument)
// return an array of all objects which have matching name and value pairs

// THIS IS NOT MY SOLUTION

// e.g. if the first argument is:
/* [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ]
*/

// and the second argument is { last: "Capulet" }

// you must return the third object of the array

function whatIsInAName(collection, source) {

  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });