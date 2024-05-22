// ---------- Match All Letters and Numbers ---------- \\
    // javascript has a closet class: \w
    // this is equivalent to /[A-Za-z0-9_] 
    // the underscore character is included

    /*** Challenge ***/
        // Use \w to count the numbers of alphanumeric characters in the quote
        let quoteSample = "The five boxing wizards jump quickly.";
        let alphabetRegexV2 = /\w/g; // Change this line
        let result = quoteSample.match(alphabetRegexV2).length;
    /*** Challenge ***/

// ---------- Match All Letters and Numbers ---------- \\
