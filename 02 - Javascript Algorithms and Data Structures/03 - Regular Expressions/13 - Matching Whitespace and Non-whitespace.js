// ------------ 1) Match Whitespace -------------- \\
    // \s is used to match ALL whitespace such as tabs, carriage returns etc
    // this is equivalent to \[\r\t\f\n\v]\

    /*** Challenge ***/
        // count the whitespace characters in the string
        let sample = "Whitespace is important in separating words";
        let countWhiteSpace = /\s/g; // Change this line
        let result = sample.match(countWhiteSpace);
    /*** Challenge ***/

// ------------ 1) Match Whitespace -------------- \\



// ------------ 2) Match Non-Whitespace Characters -------------- \\
    // \S lets you match with non-whitespace characters
    // this is equivalent to \[^\r\t\f\n\v]\

    /*** Challenge ***/
        let sample2 = "Whitespace is important in separating words";
        let countNonWhiteSpace = /\S/g; // Change this line
        let result2 = sample2.match(countNonWhiteSpace);
    /*** Challenge ***/

// ------------ 2) Match Non-Whitespace Characters -------------- \\