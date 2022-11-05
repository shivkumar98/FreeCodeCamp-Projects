// --------------- Iterate Through the Keys of an Object --------------- \
    // we can iterate through the keys of an object using (for x in y) syntax
    
    /*** Example ***/
        let users = {
            Alan: {age: 27,online: true},
            Jeff: {age: 32,online: true},
            Sarah: {age: 48,online: true},
            Ryan: {age: 19,online: true}
        };
        for ( let user in users){
            // console.log(user) // Alan Jeff Sarah Ryan
        }
    /*** Example ***/
    
    /*** Challenge ***/
        // loop throught users object and returns the number of users whose online = true
        const users1 = {
            Alan: {
              online: false
            },
            Jeff: {
              online: true
            },
            Sarah: {
              online: false
            }
          }
          
          function countOnline(usersObj) {
            // Only change code below this line
            let onlineUsers = 0;
            for (let user in usersObj){
                if (usersObj[user].online == true) onlineUsers++;
            }
            return onlineUsers
            // Only change code above this line
          }
          
          console.log(countOnline(users1));
    /*** Challenge ***/
    
// --------------- Iterate Through the Keys of an Object --------------- \