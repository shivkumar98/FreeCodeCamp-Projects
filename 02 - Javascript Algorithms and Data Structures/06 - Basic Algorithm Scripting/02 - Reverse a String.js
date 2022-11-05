// --------------- Reverse a String --------------- \
    // reverse the provided string
    function reverseString(str) {
        let arr = []
        for (let i = 0; i < str.length; i++){
            arr.push(str[i])
        }
        let reversed = ""
        for (let i = arr.length - 1; i >=0; i--){
            reversed+= arr[i]
        }
        console.log(reversed)
        return reversed;
      }
      reverseString("hello");

      // here is a better solution:
      /*
        function reverseString(str) {
            let reversedStr = "";
            for (let i = str.length - 1; i >= 0; i--) {
                reversedStr += str[i];
            }
            return reversedStr;
        }
      */
// --------------- Reverse a String --------------- \