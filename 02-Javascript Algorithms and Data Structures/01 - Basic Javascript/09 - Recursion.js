// ------------- Replace Loops using Recursion -------------------- //

    /*** Example 1:  ***/
    // consider the following function:
    function multiply(arr, n){
        let product = 1;
        for (let i = 0; i < n; i++) {
            product *= arr[i]
        }
        return product
    }

    // we can make this function RECURSIVE:
    function multiply (arr, n){
        if (n<= 0){
            return 1;
        } else {
            return multiply(arr, n-1) * arr[n-1]
        }
    }

    /*** Example 2: ***/
    // Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

    function sum(arr, n) {
        // Only change code below this line
        console.log("arr, n:"+ arr+ " "+n)
        if (n==1){
          return arr[0]
        } else if (n<=0){
            return 0
        } else{
            return  arr[n-1] + sum(arr, n-1)
        }
        // Only change code above this line
      }

      console.log(sum([2, 3, 4], 1))

      console.log(sum([2, 3, 4, 5], 3))

      console.log(sum([2, 3, 4], 1))