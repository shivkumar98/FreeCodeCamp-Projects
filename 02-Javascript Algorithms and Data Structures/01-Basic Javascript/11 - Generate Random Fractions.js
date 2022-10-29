// ------------ Generate Random Fractions with JavaScript ------------------- //

    // Math.random() generates a number in the range: [0.1) 
    // 0 is inclusive, 1 is exclusive

// ------------ Generate Random Fractions with JavaScript ------------------- //

    /*** Example 1: ***/
    // Use this technique to generate and return a random whole number between 0 and 9.

    function randomWholeNum() {
        // Only change code below this line
        return Math.floor(Math.random()*10);
      }

      // if we wanter the range to be between 1 and 9 we would add 1 to the product to give us numbers between 1-10 and then we would subtract 1 to the return to get 0-9 


// -------------- Generate Random Whole Numbers with JavaScript ---------------------- //

    /*** Example 2: ***/
    // Write a function which will return a number in a range: [minVal, maxVal]

    // Math.random() * maxValue ~ will return a number beteen 0 and (MaxValue -1)
    // ( Math.random() * (maxValue - minValue) )  ~ will return number in range: (0 , (maxValue - MinValue - 1)]
    // ( Math.random() * (maxValue - minValue) ) + minNumber ~ will return number in range: (minValue, minValue + maxValue + 1]
    // ( Math.random() * (maxValue - minValue) + 1 ) + minNumber ~ will return number in range: (minValue+1, maxValue + 1]
    // Math.floor( Math.random() * (maxValue - minValue) + 1 ) ) ~ will return number in range: [minValue, maxValue]

    function randomRange(myMin, myMax) {
        // Only change code below this line
        return Math.floor(Math.random() * ( myMax - myMin + 1) + myMin)
        // Only change code above this line
      }