// functions can be declared as the following:
function padRow() {
    console.log("hello")
}
// you can call the function using the signature and brackets:
padRow(); // prints hello

// heres a function with a parameter
function repeat(x) {
    console.log("In repeat")
    console.log("hello".repeat(x))
}

repeat(); // prints In repeat

repeat(2); // prints In repeat hellohello

// all functions have a return
function funWithNoReturn() {

}
let returned = funWithNoReturn();
console.log(returned); // undefined
