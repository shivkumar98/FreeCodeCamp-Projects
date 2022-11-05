// --------------- Check If an Object Has a Property --------------- \
    
    // we can check if an object has a property by using the hasOwnProperty() method
    // we can also use in keyword

    /*** Example ***/
        const user = {  name:'Alan', age: 23, gender:'male' }
        console.log(user.hasOwnProperty('name')) // true
        console.log('name' in user) // true
    /*** Example ***/
    
    /*** Challenge ***/
        // finish writing the function so it returns true if object contains all 4 names:
        // Alan, Jeff, Sarah, Ryan
        // returns false otherwise
        let users = {
            Alan: {age: 27,online: true},
            Jeff: {age: 32,online: true},
            Sarah: {age: 48,online: true},
            Ryan: {age: 19,online: true}
          };
          function isEveryoneHere(userObj) {
            // Only change code below this line
            console.log(userObj)
            if (userObj.hasOwnProperty('Alan') &&
            userObj.hasOwnProperty('Jeff') &&
            userObj.hasOwnProperty('Sarah') &&
            userObj.hasOwnProperty('Ryan') ) {
                return true
            } return false
            // Only change code above this line
          }
          
          console.log(isEveryoneHere(users));
    /*** Challenge ***/
    
// --------------- Check If an Object Has a Property --------------- \