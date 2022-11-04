// ------------- Check for All or None -------------- \\
    // sometimes you may want to search for parts with may or may not exist
    // the ? checks for zero or one of the preceeding element, hence making it optional
    
    /*** Example ***/
        // suppose you want to match colo(u)r
        let americanBritishColorRegex = /colou?r/
    /*** Example ***/

    /*** Challenge ***/
        // match british and american spellings of favourite
        let favWord = "favorite";
        let favRegex = /favou?rite/; // Change this line
        let result = favRegex.test(favWord);
    /*** Challenge ***/

// ------------- Check for All or None -------------- \\