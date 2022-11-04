// ------------------- 1) Remove Items Using splice() ------------------- \\

    // splice() lets us remove any number of consecutive ele ents from anywhere in an array
    
    /*** Example ***/
    
        let array = ['today', 'was', 'not', 'so', 'great'];
        array.splice(2, 2);
        console.log(array) // [ 'today', 'was', 'great' ]
    
        /*** Example ***/

    /*** Challenge ***/

        // We've initialized an array arr. 
        // Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
        const arr = [2, 4, 5, 1, 7, 5, 2, 1];
        // Only change code below this line
        arr.shift()
        arr.splice(3, arr.length-1)
        // Only change code above this line
        console.log(arr); // [ 4, 5, 1 ]

    /*** Challenge ***/

// ------------------- 1) Remove Items Using splice() ------------------- \\



// ------------------- 2) Add Items Using Splice() ------------------- \\

    // splice can take 3 arguments which 

    /*** Example ***/
        const numbers = [10, 11, 12, 12, 15];
        const startIndex = 3;
        const amountToDelete = 1;
        
        numbers.splice(startIndex, amountToDelete, 13, 14);
        console.log(numbers); // [ 10, 11, 12, 13, 14, 15 ]

    /*** Example ***/

    /*** Challenge ***/
        // We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
        // Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
        function htmlColorNames(arr) {
            // Only change code below this line
            arr.splice(0, 1)
            arr.splice(0, 1,'DarkSalmon','BlanchedAlmond')
            // Only change code above this line
            return arr;
          }
          
          console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
          /* ['DarkSalmon',
             'BlanchedAlmond',
             'LavenderBlush',
             'PaleTurquoise',
             'FireBrick' ] */
          
    /*** Challenge ***/

// ------------------- 2) Add Items Using Splice() ------------------- \\