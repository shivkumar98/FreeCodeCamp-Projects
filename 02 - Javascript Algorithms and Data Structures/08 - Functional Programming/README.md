## Section 8: Functional Programming

### What is Functional Programming?

This is a style of programming where solutions are isolated, simple and independent of other components of the application.

They key features of functional programming is:

1) Isolated functions - no dependence of the state of the program

2) Pure functions - output is always the same for any given input

3) Limited side effects

### Callbacks

A callback is a function passed into another function.

First class functions are functions which are assigned to a variable, passed to another function or returned from another function.

Higher order functions are functions which can take another function as an argument.

Functions which can be supplied as arguments or returned from a function can be called *lambdas*.

### Understand the Hazards of Using Imperative Code

Functional programming can make your code more manageable and less prone to bugs.

Functional programming is a form of declarative programming.

Writing for-loops is a common task of imperative programming, JS has built in methods to handle such common tasks.

### Avoid Mutations and Side Effects Using Functional Programming

Imperative code which calls a function on a variable, array or an object and the functions changes the variable or property of an object.

E.g. using the splice method on an array mutates the original array.

### Pass Arguments to Avoid External Dependence in a Function

Another core principle of functional programming is declaring an explicit depedence rather than relying on a global variable.

This makes the function easier to test and it won't depend on the state of the program.

### Map Method

Arrays have a built in method: Array.prototype.map().

The map method iterated over each item in the array and returns a new array containing the result of any functions applied.

    let x = [1,2,3]
    console.log("x: "+x.map(num=> num+1)) // x: 2,3,4