// --------------- Falsy Bouncer --------------- \
    // remove all falsy values from an array. Return a new array do not mutate the original array
    // falsy values are false, null, 0, "", undefined, NaN
    function bouncer(arr) {
        let array = []
        console.log("array: "+ array)
        for (let i =0; i< arr.length; i++){
            if (arr[i]){
                array.push(arr[i])
            }
        }
        return array
    }
      
      console.log(bouncer([7, "ate", "", false, 9]));
      // --------------- Falsy Bouncer --------------- \\