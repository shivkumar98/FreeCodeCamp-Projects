// -------------- 1) Use an Array to Store a Collection of Data --------------- \\

    // we can create arrays contained elements of different types
    // e.g.:
    let simpleArray = ['one', 2, 'three', true, false, undefined, null];
    console.log(simpleArray.length); // 7


// -------------- 1) Use an Array to Store a Collection of Data --------------- \\



// -------------- 2) Access an Array's Content Using bracket notation -------------- \\

    // we can access an element by calling the arrays name followed by a bracket containing the index of the element
    // similarily we can set the value of an arrays element

    // e.g.
        let myArray = ["a", "b", "c", "d"];
        myArray[1] = "x"
        let x =myArray[1]
        console.log(myArray);

// -------------- 2) Access an Array's Content Using bracket notation -------------- \\



// -------------- 3) Add Items to an Array with push() and unshift() -------------- \\

    // arrays do not have a fixed length, arrays are mutable

    // we use push() to add to the end of an array
    // we use unshift() to add to the beggining of an array

    /*** Example ***/
        let romanNumerals = ['II', 'III'];
        romanNumerals.push('III')
        console.log(romanNumerals) // ["II", "III", "III"]
        romanNumerals.unshift('I')
        console.log(romanNumerals) // ["I", "II", "III", "III"]
    /*** Example ***/

    /*** Challenge ***/
        // We have defined a function, mixedNumbers, which we are passing an array as an argument.
        // Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array
        // and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
        function mixedNumbers(arr) {
            // Only change code below this line
            arr.unshift('I', 2, 'three');
            arr.push(7, 'VIII', 9)
            // Only change code above this line
            return arr;
          }
          
          console.log(mixedNumbers(['IV', 5, 'six']));
    /*** Challenge ***/ 

// -------------- 3) Add Items to an Array with push() and unshift() -------------- \\



// -------------- 4) Remove Items from an Array with pop() and shift() -------------- \\

    // pop() removes element from end of array
    // shift() remove element from start of array

    /*** Challenge ***/
    
        /*
          We have defined a function, popShift, which takes an array as an argument and returns a new array.
          Modify the function, using pop() and shift(),
          to remove the first and last elements of the argument array,
          and assign the removed elements to their corresponding variables,
          so that the returned array contains their values.
        */
        function popShift(arr) {
            let popped = arr.pop(); // Change this line
            let shifted = arr.shift(); // Change this line
            return [shifted, popped];
        }
        console.log(popShift(['challenge', 'is', 'not', 'complete']));

    /*** Challenge ***/

// -------------- 4) Remove Items from an Array with pop() and shift() -------------- \\
