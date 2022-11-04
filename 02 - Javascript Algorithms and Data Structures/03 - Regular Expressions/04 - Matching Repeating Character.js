// ----------- 1) Match Characters that Occur One or More Times --------------- \\

    // we may want to match a charactger which occurs once or more times
    // we can do this with the + operator

    /*** Challenge ***/
        // You want to find matches when the letter s occurs one or more times in Mississippi
        let difficultSpelling = "Mississippi";
        let myRegex = /s+/ig; // Change this line
        let result = difficultSpelling.match(myRegex);
    /*** Challenge ***/

// ----------- 1) Match Characters that Occur One or More Times --------------- \\


// ----------- 2) Match Characters that Occur Zero or More Times ------------ \\
    // the * operator lets us check if a character occurs 0 or more times
    // e.g. /go*/ will match letters beggining with "g" and optionally suffixed with "o"

    
    /*** Challenge ***/
        // create a regex which matches uppercase A immediately followed by 0 or more lowercase a
        chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
        // Only change code below this line
        let chewieRegex = /Aa*/; // Change this line
        // Only change code above this line
        let result2 = chewieQuote.match(chewieRegex);
    /*** Challenge ***/

// ----------- 2) Match Characters that Occur Zero or More Times ------------ \\