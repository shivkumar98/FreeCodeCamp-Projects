const numbers = [1,2,3]

// pop is used to remove the end of an array
// push(T) is used to add to the end of an array

// shift() remmoves the element from the start of an array
let shifted = numbers.shift()
console.log(shifted) // 1
console.log(numbers) // [2,3]

// unshift(T) adds an element at the start of an array
numbers.unshift(123);
console.log(numbers); // [123, 2 ,, 3]

