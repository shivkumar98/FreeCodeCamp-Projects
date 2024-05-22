// -------------- 1) Handle a Fulfilled Promise with then -------------- \\

    // promises are most useful when you have a process which takes an unknown amount of time, i.e. asynchronicity

    // promises have a then method which is executed immediately after a promise is fufilled

    // e.g. when you make a server request it takes a given amount of time and after it completes you want to do something with the response.

    myPromise.then( result => {});

    /*** Challenge ***/
    // add the then method to your promise. 
    // use result as the parameter of its callback function and log result to the console

    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to true to represent a successful response from a server
        let responseFromServer = true;
          
        if(responseFromServer) {
          resolve("We got the data");
        } else {  
          reject("Data not received");
        }
      });

      makeServerRequest.then((result)=> { console.log(result) })

// -------------- 1) Handle a Fulfilled Promise with then -------------- \\




// -------------- 2) Handle a Rejected Promise with catch -------------- \\

      // catch is a method used when your promise has been rejected.
      // it is executed immediately after a promise's reject method is called.

      myPromise.catch( (error)=> { });

      /*** Challenge: ***/
      /* Add the catch methof to your promise. Use error as the parameter of its callback function and log error to the console */

      makeServerRequest.catch ( (error) => { console.log(error) })
    

// -------------- 2) Handle a Rejected Promise with catch -------------- \\

