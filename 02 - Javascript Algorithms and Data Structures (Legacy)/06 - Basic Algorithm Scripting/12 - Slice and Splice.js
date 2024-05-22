// --------------- Slice and Splice --------------- \
    // you are given two arrays and an index
    // copy each element of the first array to second array in order
    // begin inserting elements at index n of the second array
    
    function frankenSplice(arr1, arr2, n) {
        let localArray = arr2.slice();
        for (let i = 0; i < arr1.length; i++) {
            localArray.splice(n, 0, arr1[i]);
            n++;
        }
        return localArray;
    }
      
    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// --------------- Slice and Splice --------------- \