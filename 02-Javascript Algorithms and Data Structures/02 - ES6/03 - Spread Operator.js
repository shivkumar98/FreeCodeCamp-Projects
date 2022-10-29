// ----------- Use the Spread Operator to Evaluate Arrays In-Place ------------- //
    // the spread operator allows us to use arrays in place where multiple parameters are expected
    // we can also use the spread operator to copy the contents to another array, this is better than assigning the reference as changes to original will change cop

    /*** Example 1:  ***/
    var arr = [6, 8, 27, 3]
    var max = Math.max.apply(null, arr) // we HAD to use the apply method

    // a better solution is to SPREAD out the array
    max = Math.max(...arr);
    console.log(max) // 27

    /*** Example 2:  ***/
    /* Copy all contents of arr1 into another array arr2 using the spread operator. 
    BEFORE:
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    arr2 = [];  // Change this line */

    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [...arr1];  // Change this line

    console.log(arr2);

