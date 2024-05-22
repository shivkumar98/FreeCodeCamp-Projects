// -------------------- Iterate Through All an Array's Items Using For Loops -------------------- \\

    // we can iterate through an array using every(), forEach(), map() however the standard for loop

    /*** Example ***/
        function greaterThanTen(arr) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 10) {
                newArr.push(arr[i]);
            }
            }
            return newArr;
        }
        
        console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); [ 12, 14, 80 ]
    /*** Example ***/

    /*** Challenge ***/
        // elem is used to represent an element which may or may not be in a sub array of arr
        // modify the functiomnso it returns a filtered version which removes elem
        function filteredArray(arr, elem) {
            let newArr = [];
            // Only change code below this line
            for (let i = 0; i <arr.length; i++){
                if (arr[i].indexOf(elem)==-1){  newArr.push(arr[i]) }
            }
            // Only change code above this line
            return newArr;
          }
          
          console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
          console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))
    /*** Challenge ***/

// -------------------- Iterate Through All an Array's Items Using For Loops -------------------- \\