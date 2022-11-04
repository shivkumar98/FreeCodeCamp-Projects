// ------------ Match All Non-Numbers ------------- \\
    // there is a shortcut for non-numbers: \D
    // this is equivalent to /[^0-9]/

    /*** Challenge ***/
        // count all the non-digits
        let movieName = "2001: A Space Odyssey";
        let noNumRegex = /\D/g; // Change this line
        let result = movieName.match(noNumRegex).length;
    /*** Challenge ***/

// ------------ Match All Non-Numbers ------------- \\

