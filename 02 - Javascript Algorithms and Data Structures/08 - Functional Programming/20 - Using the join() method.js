// use the join method to make a statement from an array

function sentensify(str) {
    // Only change code below this line
    return str.split(/[.,-]/).join(" ")
    // Only change code above this line
  }
  
sentensify("May-the-force-be-with-you");
console.log(sentensify("The.force.is.strong.with.this.one"))
console.log(sentensify("There,has,been,an,awakening"))