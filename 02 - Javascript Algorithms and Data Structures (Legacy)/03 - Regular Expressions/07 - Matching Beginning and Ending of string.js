// ------------ Match Beginning String Patterns ------------ \\

    // we can use the caret ^ symbol to search at the beginning of a string
    // e.g. /^Ricky/ will match Ricky at the start of a string

    /*** Challenge ***/
        // use the caret character to find "Cal" only at the beginning
        let rickyAndCal = "Cal and Ricky both like racing.";
        let calRegex = /^Cal/; // Change this line
        let result = calRegex.test(rickyAndCal);
    /*** Challenge ***/

// ------------ Match Ending String Patterns ------------ \\
    // we can use $ to match end of a string
    // e.g. /story$/ will match story at the end of a string

    /*** Challenge ***/
        // match the string "caboose" at the end of the string
        let caboose = "The last car on a train is the caboose";
        let lastRegex = /caboose$/; // Change this line
        let result2 = lastRegex.test(caboose);
    /*** Challenge ***/


// ------------ Match Ending String Patterns ------------ \\