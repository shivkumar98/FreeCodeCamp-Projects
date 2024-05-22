# 8: Functional Programming

## Contents:

1) [**What is Functional Programming?**](#8-functional-programming)
    
    * [Callbacks](#811-callbacks)
    
2) [**Imperative VS Functional Code**](#82---imperative-vs-functional-code)

    * [Benefits of Functional Code](#821-benefits-of-functional-code)
    * [Avoid Mutations and Side Effects Using Functional Programming](#822-avoid-mutations-and-side-effects-using-functional-programming)
    * [Pass Arguments to Avoid External Dependence in a Function](#823-pass-arguments-to-avoid-external-dependence-in-a-function)

3) [**JavaScript Functional Methods**](#83---javascript-functional-methods)

    * [map() Method](#831-map-method)
    * [filter() Method](#832-filter-method)
    * [slice() Method](#834-slice-method)
    * [splice() Method](#835-splice-method)
    * [concat() Method](#836-concat-method)
    * [reduce() Method](#837-reduce-method)
    * [sort() Method](#838-sort-method)
    * [split() Method](#839-split-method)
    * [join() Method](#8310-join-method)
    * [every() Method](#8311-every-method)
    * [some() Method](#8312-some-method)
    * [Currying](#8313-currying)
    * [Partial Functions](#8314-partial-functions)


<hr>

<h2 id ="8.1"> 8.1 - What is Functional Programming?</h2>

This is a style of programming where solutions are isolated, simple and independent of other components of the application.

They key features of functional programming is:

1) Isolated functions - no dependence of the state of the program

2) Pure functions - output is always the same for any given input

3) Limited side effects



### 8.1.1 *Callbacks*

* A callback is a function passed into another function.

* First class functions are functions which are assigned to a variable, passed to another function or returned from another function.

* Higher order functions are functions which can take another function as an argument.

* Functions which can be supplied as arguments or returned from a function can be called *lambdas*.

<hr>


## 8.2 - Imperative VS Functional Code

### 8.2.1 *Benefits of Functional Code*

* Functional programming can make your code more manageable and less prone to bugs.

* Functional programming is a form of **declarative programming**.

* Writing for-loops is a common task of imperative programming, JS has built in methods to handle such common tasks.


### 8.2.2 *Avoid Mutations and Side Effects Using Functional Programming*

* Imperative code which calls a function on a variable, array or an object and the functions changes the variable or property of an object.

* E.g. using the splice method on an array mutates the original array.

### 8.2.3 *Pass Arguments to Avoid External Dependence in a Function*

* **declare an explicit depedence rather than relying on a global variable**

* This makes the function easier to test and it won't depend on the state of the program.

<hr>

## 8.3 - JavaScript Functional Methods

### 8.3.1 *map() Method*


* **iterates over each item in the array and returns a *new* array containing the result of any functions applied.**

* This is a built-in method: Array.prototype.map().
    
        let x = [1,2,3]
        console.log("x: "+x.map(num=> num+1)) // x: 2,3,4


### 8.3.2 *filter() Method*

* **Calls a function on each element of an array and returns a new filtered array**

* **Non-mutative** function

* E.g. the below code maps each movie to an object with title and rating properties, then filters movies based on the rating

        const filteredList = watchList.map(movie=>(
            {
                "title": movie.Title,
                "rating": movie.imdbRating
            }))
        .filter(movie => movie.rating >= 8.0)

### 8.3.4 *slice() Method*

* **Returns a copy of certain elements of an array based on start and end index**

* **Non-mutative** function

* If no parameters are supplied then the whole array is copied.

        const arr = ["Cat", "Dog", "Tiger", "Zebra"];
        const newArray = arr.slice(1, 3); // ["Dog", "Tiger"]

### 8.3.5 *splice() Method*

 * **Removes specific elements from an array based on index and number of elements to remove**

 * **Mutative** function

* The splice method takes 2 arguments: index where to start splice and number of elements to remove. If second argument is not provided then elements are removed till end index


        const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
        console.log(cities.splice(3, 1)) // ["London"]
        console.log(cities) // ["Chicago", "Delhi", "Islamabad", "Berlin"];

### 8.3.6 *concat() Method*

* **Joins two arrays**

* **Non-Mutative** function

* We can merge two arrays using the concat() method without mutating either array

        [1, 2, 3].concat([4, 5, 6]); // [1,2,3,4,5]

* We can use concat to add elements to the end of an array rather than use push()


### 8.3.7 *reduce() Method*

* **Processes an array and returns a single value based on reducer function**

* Syntax:

        arr.reduce(callback(accumulator, currentValue), initialValue)

* Example:

        const users = [ { name: 'John', age: 34 },
                        { name: 'Amy', age: 20 },
                        { name: 'camperCat', age: 10 } ];
        const sumOfAges = users.reduce( (sum, user) => sum + user.age , 0 ); // 64
        

### 8.3.8 *sort() Method*
 
* **Sorts an array based on a callback method**

* **Mutative** function

        [1,5,4,6,8,2,5,6].sort((a,b)=> a-b) 

* The indexing of elements is dependent on the sign of the callback function:

    1) &gt;0 - a is placed after b
    2) =0 - no change 
    3) &lt;0 - b is placed after a

* E.g. if we wanted to sort alphabetically

        ['a', 'f', 'z', 't', 'c'].sort((a,b) => a===b ? 0 : a<b ? 1 : -1


### 8.3.9 *split() Method*

* **Splits a string to an array of strings based on delimiter argument.**

* You can use regex as an argument:

        "How9Are8You3Today".split(/\d/) // ["How", "Are", "You", "Today"]


### 8.3.10 *join() Method*

* **Does the reverse of the split() method, it joins an array into a string based on a delimiter**

* This can be useful for creating URLs!

### 8.3.11 *every() Method*

* **Checks if EVERY element of an array passes a test**

       [21, 2, 65, 2].every(i=>i>0) // true

### 8.3.12  *some() Method*

*   **checks if ANY element of an array passes a test**

         [21, -2].some(i=>i>0) // true


### 8.3.13 *Currying*

* **Currying a function means changing a function which accepts n arguments into n functions which take 1 parameter**

* E.g. here's function which takes 2 parameters:

        function unCurried(x,y){ return x+y; }

* And we can call it via *unCurried(1,2)*

* We can Curry the method like this:

        function curried(x){
            return function(y){
                return x+y
            }
        }

* And then call it via *curried(1)(2)*

### 8.3.14 *Partial Functions*

* Suppose we have the following impartial function:

        function impartial(x,y,z){
            return x+y+z;
        }

* We can make this partial:

        const partialFn = impartial.bind(this,1,2)

* And then we can call it:

        partialFn(10); //13