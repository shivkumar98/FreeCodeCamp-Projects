// --------------- Return Largest Numbers in Arrays --------------- \
    // return an array consisting of the largest number from each sub array.
    // the provided array will have 4 subarrays    
    function largestOfFour(arr) {
        let largestNumbers = []
        for (let i=0; i<4; i++){
            let x = -99999999;
            for (let j=0; j<arr[i].length;j++){
                if (arr[i][j]>x) x = arr[i][j]
            }
            largestNumbers[i] = x
        }
        return largestNumbers
      }
      console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
// --------------- Return Largest Numbers in Arrays --------------- \