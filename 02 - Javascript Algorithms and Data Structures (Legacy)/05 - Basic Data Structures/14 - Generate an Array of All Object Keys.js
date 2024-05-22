// --------------- Generate an Array of All Object Keys --------------- \
    
    // the keys of an object can be generated into an array using Object.keys()
    
    /*** Challenge ***/

        // return an array containing all the properties in the object it recieves as argument
        let users = {
            Alan: {age: 27,online: false},
            Jeff: {age: 32,online: true},
            Sarah: {age: 48,online: false},
            Ryan: {age: 19,online: true}
          };
          
          function getArrayOfUsers(obj) {
            // Only change code below this line
            return Object.keys(obj) 
            // Only change code above this line
          }
          
          console.log(getArrayOfUsers(users)); // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

    /*** Challenge ***/
    
// --------------- Generate an Array of All Object Keys --------------- \