// in order to see what the map() function does internally, create your own implementation

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i<this.length; i++){
    newArray.push(callback(this[i]))
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s) // [ 46, 130, 196, 10 ]