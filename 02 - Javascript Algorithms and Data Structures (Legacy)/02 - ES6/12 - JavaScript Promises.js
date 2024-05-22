// ---------------- 1) Create a JavaScript Promise ---------------- \\

    // a promise in JS is a promise to fufill something
    // when a task is finished, tthe promise is fufilled or rejected
    // Promise is a constructor function which has two parameters: resolve, reject

    /*** Example: ***/ 
    const myPromise = new Promise((resolve, reject)=>{ })

    /*** Challenge:  ***/
    /*   Create a new promise called makeServerRequest.
         Pass in a function with resolve and reject parameters to the constructor
    */

    const makeServerRequest = new Promise((resolve, reject)=> {})

// ---------------- 1) Create a JavaScript Promise ---------------- \\




// ---------------- 2) Complete a Promise with resolve and reject --------------- \\

    // a promise has 3 states: pending, fufilled, rejected
    // if no implementation is provided then the promise is stuck on pending
    // we need to write code  in order for the promise to be fufilled or rejected

    /*** Example: ***/
    const myPromise1 = new Promise((resolve, reject)=> {
        if (/*condition*/ true){
            resolve("promise resolved")
        } else {
            reject("promise rejected")
        }
    });


    /*** Challenge: ***/
    /*  Make a promise handle success or failure.
        If responseFromServer is true, call the resolve method to successfully complete the promise.
        Pass resolve with string "We got the data"
        If responseFromServer is false, use reject with string "Data not recieved"
    */

        const makeServerRequest1 = new Promise((resolve, reject) => {
            // responseFromServer represents a response from a server
            let responseFromServer;
              
            if(responseFromServer) {
              resolve("We got the data")
            } else {  
              reject("Data not received");
            }
          });

// ---------------- 2) Complete a Promise with resolve and reject --------------- \\  