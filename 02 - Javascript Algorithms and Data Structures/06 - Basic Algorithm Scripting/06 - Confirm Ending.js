// --------------- Confirm Ending --------------- \
    // check if a string ends with target string
    function confirmEnding(str, target) {
        
        if (str.length < target.length){
            return false
        } else {
            for (let i = str.length-target.length; i< str.length; i++ ){
                console.log(`str[i]: ${str[i]}, target[i-1]: ${target[i+target.length-str.length]}`);
                if ( str[i] != target[i+target.length-str.length]){
                    return false
                } else { continue }
            }
            return true
        }
       
        
    }
      
    
      console.log(confirmEnding("Congratulation", "on"))
      
// --------------- Confirm Ending --------------- \