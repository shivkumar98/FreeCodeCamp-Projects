// ------------- Positive and Negative Lookahead ------------- \\

    // a positive lookahead will make sure the element in the search pattern is there but won't match it
    // the syntax is  (?=...) where ... is the required part
    // a negative lookahead is to make sure an element is not there
    // the syntax is (?!...) where ... is the non-required part
    
    /*** Example ***/
        let positiveRegex = /q(?=u)/
        console.log("quit".match(positiveRegex)) // returns 'q'
        console.log("qiut".match(positiveRegex)) // returns null

        let negativeRegex = /q(?!u)/
        console.log("quit".match(negativeRegex)) // returns null
        console.log("qiut".match(negativeRegex)) // returns 'q'
    /*** Example ***/

    /*** Challenge ***/
        // use lookahead to match password that are greater than 5 characters long, and have two consecutive digits.
        let sampleWord = "astronaut";
        let pwRegex = /(?=\w{2,4})(?=\D\d\d+)/i
        let result = pwRegex.test(sampleWord);
    /*** Challenge ***/

// ------------- Positive and Negative Lookahead ------------- \\

