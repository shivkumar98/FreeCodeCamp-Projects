// ------------ Match Everything But Letters and Numbers ------------ \\
    // the opposite of the alphanumeric case: \w is \W
    // this is equivalent to [^A-Za-z0-9_]

    /*** Challenge ***/
        // Count non-alphanumeric characters in quote
        let quoteSample = "The five boxing wizards jump quickly.";
        let nonAlphabetRegex = /\W/g; // Change this line
        let result = quoteSample.match(nonAlphabetRegex).length;
    /*** Challenge ***/

// ------------ Match Everything But Letters and Numbers ------------ \\