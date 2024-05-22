// ----------------------- Modify an Object Nested Within an Object ----------------------- \\

    /*** Example ***/
         let nestedObject = {
            id: 28802695164, date: 'December 31, 2016',
            data: { totalUsers: 99, online: 80, onlineStatus: { active: 67, away: 13, busy: 8 } }
        };
        console.log(nestedObject.data.onlineStatus.active) // 67
    /*** Example ***/
   
   /*** Challenge ***/
        // assign 45 to the online property
        let userActivity = {
            id: 23894201352,
            date: 'January 1, 2017',
            data: {
              totalUsers: 51,
              online: 42
            }
          };
          
          // Only change code below this line
          userActivity.data.online = 45
          // Only change code above this line
          
          console.log(userActivity);
   /*** Challenge ***/

// ----------------------- Modify an Object Nested Within an Object ----------------------- \\

