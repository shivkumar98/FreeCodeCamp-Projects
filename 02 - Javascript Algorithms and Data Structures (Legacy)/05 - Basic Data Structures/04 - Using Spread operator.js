// --------------- Copy an Array with the Spread Operator --------------- \\

    // the spread operator is a super easy way to copy all the elements of an array

    /*** Example ***/
    let thisArray = [true, true, undefined, false, null];
    let thatArray = [...thisArray] 
    thisArray[0] = "changed"
    console.log(thatArray) // [ true, true, undefined, false, null ]
/*** Example ***/

/*** Challenge ***/
    // The function is supposed to return a new array with num copies of arr.
    function copyMachine(arr, num) {
        let newArr = [];
        while (num >= 1) {
          // Only change code below this line
          newArr.push([...arr])
          // Only change code above this line
          num--;
        }
        return newArr;
      }
      console.log(copyMachine([true, false, true], 2));
/*** Challenge ***/

// --------------- Copy an Array with the Spread Operator --------------- \\



// --------------- Combine Arrays with the Spread Operator --------------- \\

// spread operator can be used to insert all elements of one array to another

/*** Example ***/
    let thisArray2 = ['sage', 'rosemary', 'parsley', 'thyme'];
    let thatArray2 = ['Basil', 'Tumeric', ...thisArray2, 'salt' ]
    console.log(thatArray2) // [ 'Basil', 'Tumeric', 'sage', 'rosemary', 'parsley', 'thyme', 'salt']
/*** Example ***/

/*** Challenge ***/
    // modify the code so it returns ['learning', 'to', 'code', 'is', 'fun']
    function spreadOut() {
        let fragment = ['to', 'code'];
        let sentence = [ 'learning', ...fragment, 'is', 'fun']; // Change this line
        return sentence;
    }
    console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is', 'fun' ]
/*** Challenge ***/

// --------------- Combine Arrays with the Spread Operator --------------- \\