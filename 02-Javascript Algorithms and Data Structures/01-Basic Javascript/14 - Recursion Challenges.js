// ------------ Use Recursion to Create a Countdown ------------------- //

    /*** Challenge 1 ***/
    /*
    We have defined a function called countdown with one parameter (n).
    The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
    If the function is called with a number less than 1, the function should return an empty array.
    For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
    Your function must use recursion by calling itself and must not use loops of any kind. */

    // Only change code below this line
    function countdown(n){
        if (n<1) {
            return []
        } else if (n == 1){
            return [1]
        }
         else {
            return [n].concat(countdown(n-1))
        }
    }
    // Only change code above this line

    //console.log(countdown(2))
    //console.log(countdown(1))
    // console.log(countdown(3))

// ------------ Use Recursion to Create a Countdown ------------------- //




// ------------ Use Recursion to Create a Range of Numbers ------------------- //

    /*** Challenge 2 ***/
    /*   We have defined a function named rangeOfNumbers with two parameters.
    The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter.
    The starting number will always be less than or equal to the ending number.
    Your function must use recursion by calling itself and not use loops of any kind. 
    It should also work for cases where both startNum and endNum are the same.   */

    function rangeOfNumbers(startNum, endNum) {
        console.log("startNum, endNum: "+ startNum+ " "+ endNum)
        if (startNum == endNum){
            return [startNum]
        }
        return  [startNum].concat(rangeOfNumbers(startNum+1, endNum))
    };

    // console.log(rangeOfNumbers(1,1)) // return [1]
    console.log(rangeOfNumbers(1,2))
    console.log(rangeOfNumbers(1,3))
