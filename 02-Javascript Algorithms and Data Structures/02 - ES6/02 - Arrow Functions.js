// ------- 1) Use Arrow Functions to Write Concise Anonymous Functions ------- //

    // we can create anonymous functions which can be passed directly as arguments to other functions using arrow notation

    /***  Example 1: ***/
          // the following method can be made into an arrowed function:
          const myFunc = function(){
            const myVar = "value";
            return myVar
          }
            
          const myArrowFunc = () => "value";

    /***  Example 2:  ***/
          /* Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax.
             Also, make sure nothing is defined using the keyword var.*/

          /* Before:
            var magic = function() {
             return new Date();
            };
          */

            const magic = () => new Date(); 

// ------- 1) Use Arrow Functions to Write Concise Anonymous Functions ------- //




// -------------- 2) Write Arrow Functions with Parameters -------------------- //

    /*** Example 3:  ***/
    /* Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

    BEFORE:
    var myConcat = function(arr1, arr2) {
        return arr1.concat(arr2);
    };
    */

    const myConcat = (arr1, arr2) => arr1.concat(arr2);
      
    console.log(myConcat([1, 2], [3, 4, 5]));

// -------------- 2) Write Arrow Functions with Parameters -------------------- //





// ------------------ 3) Set Default Parameters for Your Functions ------------------ //

    /*** Example 4:  ***/
    /* Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

    BEFORE:
    const increment = (number, value) => number + value;
    */

    const increment = (number=0, value=1) => number + value;


// ------------------ 3) Set Default Parameters for Your Functions ------------------ //





// ------------------------ 4) Use the Rest Parameter with Function Parameters ------------------------- //

    // rest parameter allow for a variable number of parameters, these are declared with ... preceding variable name
    // they allow us to apply: map(), reduce(), filter()

    /*** Example 5:  ***/
    /*  Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
        BEFORE:
        const sum = (x, y, z) => {
            const args = [x, y, z];
            return args.reduce((a, b) => a + b, 0);
        }
    */

    const sum = (...args) => {
        return args.reduce((a, b) => a + b, 0);
    }

    
    // console.log(sum(1,2,3,4,5,6)) // returns 21

// ------------------------ 4) Use the Rest Parameter with Function Parameters ------------------------- //