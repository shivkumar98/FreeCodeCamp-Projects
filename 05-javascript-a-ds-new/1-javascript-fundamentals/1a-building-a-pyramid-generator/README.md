# 🧠 1A Building a Pyramid Generator
* In this practice project I will code a pyrammid generator and learn how to work with arrays, strings, functions, loops, if/else etc.

## 👨‍🍳 Final Product 👨‍🍳
* The JavaScript for this exercise is defined [here](05 - JavaScript A&DS (New)\1A Building a Pyramid Generator\javascript\Pyramid Generator.js):
```js
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) 
        + character.repeat(2*rowNumber-1) 
        + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result);
/* RESULT:
         !         
        !!!        
       !!!!!       
      !!!!!!!      
     !!!!!!!!!     
    !!!!!!!!!!!    
   !!!!!!!!!!!!!   
  !!!!!!!!!!!!!!!  
 !!!!!!!!!!!!!!!!! 
!!!!!!!!!!!!!!!!!!!
*/
```

## 📝 Summary Notes 📝
* You can use `let` and `const` to declare variables
* If you declare a variable with `const` it must be initialised at declaration, and cannot be reassigned⚠️
```js
let variable = 1;
variable = 3;
const constant = 3.14;
const = 2; // COMPILER ERROR
```
* Arrays can be intialised using bracket notation
```js
let arrayOfNumbers = [1, 2, 3];
// length of array:
arrayOfNumbers.length;
console.log(arrayOfNumbers[1]); // 2
```
* The `pop()` method REMOVES and returns the element at END of an array. `push(T)` is used to ADD elements at the END of an array
```js
let array = [1,2];
array.push(3);
console.log(array); // [1,2,3]
```
* `shift()` method REMOVES and returns the element at the START of an array. `unshift(T)` is used to ADD elemments at START of an array
* For loops often use an iterator variable of `i`:
```js
for (let i = 0; i<array.length; i++) {
    console.log(array[i]);
}
```
* There is also an enhanced for loop:
```js
let rows = ["!", "!!", "!!!"];
for (const row of rows) {
    console.log(row +"\n");
}
```
* We have a `String.repeat(int)` method which returns the string repeated n times
```js
console.log("Hello ".repeat(2)); // Hello Hello
```
* We declare FUNCTIONS with the following syntax:
```js
function functionName(parameter) {
    // body
}
```
* We have **FALSEY VALUES** which are evaluated as false when used as a conditional. These include `""`, `null`, `undefined`, 0
* We have **TRUTHY VALUES** which get evaluated as true. E.g. `1`, `[]`, `"some string"`
* We can check for equality using the **EQUALITY OPERATOR** `==`. This however can return true when you would not expect it:
```js
"0" == 0; // true
```
* We have a **STRICT EQUALITY OPERATOR** `===`:
```js
"0" === 0; // false
```
* There is also a **INEQUALITY OPERATOR** and **STRICT INEQUALITY OPERATOR**:
```js
0 != "0"; // false
0 !== "0"; // false
```

## 🟥 Variables Using let
* You can declare a variable using `let`
```js
let character = "Hello";
```
* You can declare Strings using single or double quotes
```js
let character = 'Hello';
```
* You can print using `console.log()`
```js
let character = 'Hello';
console.log(character); // prints Hello
```
* If you do not initialise a variable, printing it will print `undefined`
```js
let secondCharacter;
console.log(secondCharacter); // prints undefined
```

## 🟥 Arrays
* Arrays are a non-primitve data type (primitives include strings and numbers)
* You denote an array using `[]`
```js
let rows = [];
```
* You can access an array value using **bracket-notation** 
```js
let rows = ["Naomi", "Quincy", "CamperChan"];
rows[0]; // "Naomi"
```
* Arrays are mutable and values can be changed directly
```js
let rows = ["Naomi", "Quincy", "CamperChan"];
rows[2] = 10;
console.log(rows); // ['Naomi', 'Quincy', 10]
```
* You can get the length of an array using Array's `.length` property:
```js
let rows = ["Naomi", "Quincy", "CamperChan"];
rows[row.length-1] = 10;
console.log(rows); // ['Naomi', 'Quincy', 10]
```

## 🟥 Methods
* A method is a function which is associated with specific objects
* E.g. the `console` has a `.log()` method
* `Arrays.push()` lets you add an element to the end of an array
```js
let rows = ["Naommi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows); // ["Naommi", "Quincy", "CamperChan", "freeCodeCamp"];
```
* `Arrays.pop()` removes the last element of an array
* I created a JavaScript file [Methods.js](05 - JavaScript A&DS (New)\1A Building a Pyramid Generator\javascript\Methods.js)
* I was trying to run it in VSCode using Code Runner extension
* I download Node runtime from [here](https://nodejs.org/en)
* I restarted VSCode and it worked! 🎉🎉🎉
* I also enable auto save to help me test my codee faster!

* JavaScript `.pop()` method on arrays, returns and removes the last element of an array:
```js
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(rows); // [ 'Naomi', 'Quincy', 'CamperChan']
```
* ⚠️ WARNING: There is NO `.remove()` method on arrays: ⚠️
```js
rows.remove(); // COMPILATION ERROR
```
* 💡 The `.push(T)` method also returns a value: the length of array after an elemment is pushed 💡
```js
let rows = ["Naomi", "Quincy", "CamperChan"];
let pushed = rows.push("freeCodeCamp");
console.log(pushed); // 4
console.log(rows.length) // 4
```


## 🟥 Variables using const
* Unlike let, the `const` variable is intended for variables which do not change
* A const variable MUST be initialised❗
```js
const notInitialised;
    //^^^^^^^^^^^^^^ COMPILER ERROR
```
* const variables can NOT be reassigned❗ A compilation error will occur: `TypeError: Assignmment to constant variable
```js
const doNotReassign = 1;
doNotReassign = 2; // COMPILER ERROR
```

## 🟥 For Loops
* In order to build the Pyramid Generator, we need to use a for loop
* The iterator of a for loop is usually declared using a variable called `i`
* The condition of a for loop is a boolean expression
* The iterator is used to increment the iterator
```js
const character = "#";
const count = 8;
const rows = [];
for (let i=0; i<count;i=i+1) { 
    rows.push(i);
}
```
* We can used an enhanced for loop using `for..of` syntax:
```js
const character = "#";
const count = 8;
const rows = [];
for (let i=0; i<count;i=i+1) { 
    rows.push(i);
}
let result = "";
for (const row of rows) {
    result = result + row;
}
```
* This will print numbers from 0 to 7
* We shall now add a blank line so we can build the pyramid:
```js
for (const row of rows) {
    result = result + "\n" + row;
}
```
* We update the first loop so it will push `#` instead of the iterator:
```js
const character = "#";
const count = 8;
const rows = [];
for (let i=0; i<count;i=i+1) {
    rows.push(character);
}
let result = "";
// using for..of syntax:
for (const row of rows) {
    console.log(row);
}
/* prints the following:
#
#
#
#
#
#
#
#
*/
```

## 🟥 Using String.repeat(int)
* We now want to repeat the `#` character so it builds a pyramid
* The String class has a `.repeat(int)` method which lets you print a string multiple times:
```js
let result = "";
for (let i = 0; i<3; i++) {
    result = result + "\n" + "#".repeat(i)

}
console.log(result)
/* prints the following:
#
##
###
*/
```
* We update the for loop for rows so rows will be `['#', '##', '###', ...]`:
```js
for (let i =0; i < count; i = i + 1) {
    rows.push(character.repeat(i+1));
}
```

* Here is the current code so far for our pyramid generator:
```js
const character = "#";
const count = 8;
const rows = [];
for (let i=0; i<count;i=i+1) {
    rows.push(character.repeat(i+1));
}
let result = "";
// using for..of syntax:
for (const row of rows) {
    console.log(row);
}
/* prints the following:
#
##
###
####
#####
######
#######
########
*/
```


## 🟥 Functions
* Functions are declared as the following:
```js
function name(parameter) {
}
```
* This tells JavaScript that name is a function type
* Here's an example:
```js
function repeat(x) {
    console.log("In repeat");
    console.log("hello".repeat(x));
}
repeat(); // prints In repeat
repeat(2); // prints In repeat hellohello
```
* All functions in JS have a return value! A function which has no explicit return returns `undefined` which is the default value💡
```js
let noReturn = repeat();
console.log(noReturn); // undefined
```
* We can make a return using the `return` keyword:
```js
function sayHello() {
    return "Hello!";
}
```

* We add a function to Pyramid Builder:
```js
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
    return name;
}
const call = padRow("Shiv");
console.log(call); // prints Shiv

for (let i=0; i<count;i=i+1) {
    rows.push(character.repeat(i+1));
}
let result = "";

for (const row of rows) {
    console.log(row);
}
/* prints the following:
#
##
###
####
#####
######
#######
########
*/
```

## 🟥 Scoping
* Variables declared OUTSIDE a function can be accessed from within the function
* **GLOBAL VARIABLES** are variable declared outside any block. E.g. our `character`, `count` and `rows` variables have global scope
* **LOCAL VARIABBLE** are variable declared inside a block

* We shall encapsulate the logic for repeating and formatting thhe character in a padRow function:

```js
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
}

for (let i=0;i<count;i=i+1) {
    rows.push(padRow(i+1, count));
}

let result = "";

for (const row of rows) {
    console.log(row);
}
/* prints the following:
#
##
###
####
#####
######
#######
########
*/
```

## 🟥 Padding Row
* We want the pyramid so that the top point is centered
* If we look at a pyramid with three rows:
```
··#··
·###·
#####
```
* We can see the padding is rowCount - rowNumber
    - E.g. row 1 will be 3-1=2, row 2 will be 3-2=1, row 3 will be 3-3=0
* We can see the characters are 2*rowNumber -1
    - E.g. row 1 is 2*1-1=1, row 2 is 2*2-1=3, row 3 is 2*3-1=5

* We can update our padRow function to:
```js
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount-rowNumber) 
        + character.repear(rowNumber*2-1)
        + " ".repeat(rowCount-rowNumber);
}
```
* And we update the call to this function in the for loop:
```js
for (let i=0;i<count;i=i+1) {
    rows.push(padRow(i+1, count));
}
```
* The code now prints:
```js
/*
       #       
      ###      
     #####     
    #######    
   #########   
  ###########  
 ############# 
###############
*/
```

## 🟥 Refactoring Code
* We can clean up our for loops by using increment shorthand, and we can start a loop from one:
```js
for (let i=1; i <= count; i++) {
    rows.push(padRow(i, count));
}
```

## 🟥 Conditionals

* Unlike Java, JavaScript conditionals do NOT need to be explicit `true`/`false` values:
```js
if ("somme string") {
    console.log("Hello"); // prints Hello
}
```
* In JavaScript,a  **truthy value** are values which can be evaluated as true
* A **falsey value** are values which can be evaluated as false, e.g. 0, `""`, `null`, `undefined`, and `NaN`
* We can also apply `!` operator to truthy values:
```js
if (!!1) {
    console.log(!1); // prints false
}
```

## 🟥 Equality
* We can check two values are the same using equality operator `==`:
```js
let done = 8;
done == count; // true
```
* In JavaScript, two different datatypes can be considered equals like:
```js
"0" == 0; // true
```
* We can use strict equality operator `===`:
```js
"0" === 0; // false
```

* We inverse of this operator is the strict inequality operator: `!==`
```js
console.log("0" != 0) // false
// strict inequality:
console.log("0" !== 0) // true
```

## 🟥 Decrement Operator
* If we wanted for our pyramid upside down, then we need to invert the direction of for loop
```js
for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}
/* this prints the following:
###############
 ############# 
  ###########  
   #########   
    #######    
     #####     
      ###      
       #  
*/
```

## 🟥 Arrays.shift() and Arrays.unshift(T)
* The `.shift()` method removes and returns the first element of an array
```js
let numbers = [1,2,3];
const shifted = numbers.shift(); // 1
console.log(numbers); // [2, 3]
```
* The `.unshift(T)` method adds an alement to start of an array
```js
numbers.unshift(128);
console.log(numbers); // [128, 2, 3]
```

* We can print an inverted pyramid using unshift instead of looping backwards:
```js
for (let i = 1; i <= count; i++)  {
    rows.unshift(padRow(i, count));
}
```

* I finish the Pyramid Builder by adding a `inverted` variable:

```js
const rows = [];
const count = 8;
const character = "#";
let inverted = true

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) 
        + character.repeat(2*rowNumber-1) 
        + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result);
/* prints:
###############
 ############# 
  ###########  
   #########   
    #######    
     #####     
      ###      
       #     
*/
```

* I then set the variables to:
```js
const character = "!";
const count = 10;
const rows = [];
let inverted = false;
```