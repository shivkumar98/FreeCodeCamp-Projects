// ------------ 1) Find Characters with Lazy Matching ------------ \\

    // a greedy match finds the match with the longest possible part of a string which fits the regex
    // lazy match finds the smallest possible part of a string which fits the regex

    /*** Example ***/
    let greedyRegex = /t[a-z]*i/
    // this will search for string beginning with t and ending with i
    "titanic".match(greedyRegex) // returns 'titani'

    // the * character changes the regex to lazy matching
    let lazyRegex = /t[a-z]?*i/
    "titanic".match(lazyRegex) // returns 'ti'
    /*** Example ***/

    /*** Challenge ***/
        // fix the regex to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>"
        let text = "<h1>Winter is coming</h1>";
        let myRegex = /<.*>/; // Change this line
        let result = text.match(myRegex);
    /*** Challenge ***/

// ------------ 1) Find Characters with Lazy Matching ------------ \\