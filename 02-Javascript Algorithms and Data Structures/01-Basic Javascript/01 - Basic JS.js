// comments

/*
multiline comment*/

// Javascript provides 8 different data types:
/* 
1) undefined 2) null 3) boolean 4) string 5) symbol 6) bigint 7) number 8) object


/* we can declare variables using the "var" keyword*/
var name;

/* variable names can contain $, _, numbers, letters but no spaces. Cannot begin with number*/

// var 1name = 1; does not compile
// var x+1; does not compile

var $x; // this is fine
var _x; // this is fine

// variable names are case sensitive

// variables declared with "var" can be overwritten

// If we want to set a variable to a static value, we should use "let"

let myName = "Shiv Kumar";
// let myName = "John doe"; - this will give error in browser

// we can still reassign the myName variable

// the const keyword makes the variable read-only
const NAME = "Shiv";
// name="kumar";

// it is common to make const variable labels all caps

// variables can be incremented using ++ operator
let i = 1;
i++;
print(i)

// in order to include special characters in strings we may need to escape them with a backslash

var stringWithQuotations = "his name was \"Shiv\"";

// if we use single quotes we do not need to escape

var stringWithQuotations2 = 'His name was "Shiv"'

// strings can be concatenated using + operator

// we can get the length of a string by suffixing it with ".length"

// we can treat a String like an array and access its characters using square brackets
var firstLetter = "Hello world"[0];

// arrays can be used to store multiple variables

// in javascript, we are not limited to arrays of a single type
var myArrayOfThings = ["hello", "world", true, 1]

// arrays ARE mutable and its values can be assigned using index
myArrayOfThings[0] = "Javascript"

// you can append data to an array using push() method

const arr = [1,2,3]
arr.push(4)

// you can remove data from the end of an array using pop() method
// you can also get the popped off value by assigning the popped array to another variable
const intArr = [1,2,3]
let x = intArr.pop(); // x is 3 and intArr is [1,2]

// the shift method can be used to remove the first item of an array

// the unshift method lets us add elements to the beginning of an array

// we can split up pieces of code into functions

// variables declared without let or const are automatically global

let myGlobal = 10

function fun1() {
    oopsGlobal = 5; // made a global variable
}

console.log("oopsGlobal "+oopsGlobal) // displays 5

// local variables are vars defined as const or let within a function

// it is possible to have global and local variables with same name where local takes precedence

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}
console.log(myOutfit()) // returns sweater

// if a function does not return anything then its return is undefined

// a queue is an abstract data type where items are ordered. New items are added to the back and old items are added to front

// comparsions can be made between variables/literals using == operator, the == operator will coerce two types so comparison can occur
// strict eqaulity comparison === requires the value AND datatypes are equal

// you can get the type of a variable using the typeof operator
// typeof '3' returns string
// typeof 3 returns number

// != operator is a weak comparison operator
// !== operator is a strict comparison operator