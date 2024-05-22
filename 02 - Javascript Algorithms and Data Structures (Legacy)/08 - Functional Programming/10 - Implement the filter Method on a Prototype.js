// to understand what the filter() method does internally, implement the myFilter() method

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  for (let i =0; i<this.length; i++){
    let element = this[i]
    if (callback(element)){
        newArray.push(element)
    }
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

