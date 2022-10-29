// ---------------- Compare Scopes of the var and let Keywords -------------------- //
    
    // a variable declared with var is global or local if declared in function
    // variables declared with let are local to the block its declared in

    /*** Example 1: ***/
    /*   Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function.
         Be certain not to use the var keyword anywhere in your code.
        
         This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. 
         When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.   */

         function checkScope() {
            let i = 'function scope';
            if (true) {
              let = 'block scope';
              console.log('Block scope i is: ', i);
            }
            console.log('Function scope i is: ', i);
            return i;
          }


// ---------------- Compare Scopes of the var and let Keywords -------------------- //

    // declaring a variable makes a variable read-only
    const pi = 3.14;
    // pi = 3; // javascript will not allow reassignment

    // even though reassignment is not allowed, the object assigned to the variable can still be modified!
        
    /*** Example 2: ***/
    /*  An array is declared as const s = [5, 7, 2].
        Change the array to [2, 5, 7] using various element assignments.  */

        const s = [5, 7, 2];
        function editInPlace() {
          // Only change code below this line
          s[0] = 2; s[1] = 5; s[2] =7
          // Using s = [2, 5, 7] would be invalid

          // Only change code above this line
        }
        editInPlace();
        console.log(s)

// ---------------- Compare Scopes of the var and let Keywords -------------------- //




// -------------------- Prevent Object Mutation ------------------- //
      // javascript has a method which prevents object mutation: Object.freeze
      
// -------------------- Prevent Object Mutation ------------------- //

