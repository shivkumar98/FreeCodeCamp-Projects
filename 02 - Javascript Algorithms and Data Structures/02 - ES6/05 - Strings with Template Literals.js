// 1) -------------- Create Strings using Template Literals -------------- //

    /*  template literals are created with backticks (`),
        they allow easier creation for interpolated and multiline strings
    */

    /*** Exammple 1: ***/
    const person = {
        name: "Zodiac Hasbro",
        age: 56
    };

    const greeting = `Hello! My name is ${person.name}!!
I am ${person.age} years old`

    console.log(greeting)

    /*** Example 2: ***/
    /*
    Write a program which generates the following:
    [ '<li class="text-warning">no-var</li>',
      '<li class="text-warning">var-on-top</li>',
      '<li class="text-warning">linebreak</li>' ]
    */

      const result = {
        success: ["max-length", "no-amd", "prefer-arrow-functions"],
        failure: ["no-var", "var-on-top", "linebreak"],
        skipped: ["no-extra-semi", "no-dup-keys"]
      };
      function makeList(arr) {
        const failureItems = [];
        // Only change code below this line
        for (let i =0; i < arr.length; i++){
          failureItems[i] = `<li class="text-warning">${arr[i]}</li>`
        }
        // note: while failureItems is read only, we can still manipulate the array. 
        //       what we can't do is assign the array to something else
        
        // Only change code above this line
      
        return failureItems;
      }
      
      const failuresList = makeList(result.failure);

// 1) -------------- Create Strings using Template Literals -------------- //
