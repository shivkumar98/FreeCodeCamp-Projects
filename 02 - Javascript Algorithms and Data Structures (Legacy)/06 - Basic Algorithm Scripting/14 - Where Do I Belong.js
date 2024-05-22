// --------------- Where Do I Belong --------------- \
    // return the lowest index at which a value should be inserted into an array once it has been sorted
    function getIndexToIns(arr, num) {
        let sortedArr = arr.sort((a,b)=>a-b)
        console.log("sorted "+sortedArr)
        for (let i=0; i <sortedArr.length; i++){
           if (num<=sortedArr[i]){
            return i
           }
        }
        return sortedArr.length
      }
      
      //console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
      console.log(getIndexToIns([2, 5, 10], 15))
// --------------- Where Do I Belong --------------- \