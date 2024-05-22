// --------------- Mutations --------------- \
    // return true if the string in the first element of the array contains all of the letters of string in the second element of the array
    // e.g. ["hello", "Hello"] is true, ["hello", "hey"] is false, ["Alien", "line"] is true
    
    function mutation(arr) {
        let first = arr[0].toLowerCase().split("");
        let second = arr[1].toLowerCase().split("");

        // checking if all elements of second are in first
        for (let i=0; i<second.length; i++){
            let secondCharacter = second[i].toLowerCase()
            if (first.includes(secondCharacter)){
            } else return false
        }
        return true;
    }
    mutation(["Mary", "Aarmy"])

    /* Better solution:
    function mutation(arr) {
        const test = arr[1].toLowerCase();
        const target = arr[0].toLowerCase();
        for (let i = 0; i < test.length; i++) {
            if (target.indexOf(test[i]) < 0) return false;
        }
        return true;
    } */
// --------------- Mutations --------------- \