// -------------- 1) Reuse Patterns Using Capture Groups -------------- \\

    // we can capture an element which we do not know initially
    // an element is captured using \(w+)\
    // These captured groups are automatically numbered and can be used by writing \[number]
    // E.g. /\(w+)\ /1 /1\ will captured an element and then see if the element is repeated twice

    /*** Challenge ***/
        // use capture groups to match a string that consists of only the same number repeated exactly three times
        let repeatNum = "42 42 42";
        let reRegex = /^(\d+) \1 \1$/
        let result = reRegex.test(repeatNum);
    /*** Challenge ***/

// -------------- 1) Reuse Patterns Using Capture Groups -------------- \\


// -------------- 2) Use Captue Groups to Search and Replace -------------- \\

    // we can use the replace method using regex as the first argument and the second argument can be the replacement text or function
    // capture groups can be used as replacements using $[number of capture group]
    
    /*** Example ***/
        // we can swap around a capture group
        "Code Camp".replace(/(\w+) (\w+)/, '$2 $1') // returns "Camp Code"
    /*** Example ***/

    /*** Challenge ***/
        // write a regex using three capture groups that will search for each word in the string "one two three"
        // update replaceText so that it produces "three two one"
        let str = "one two three";
        let fixRegex = /(\w+) (\w+) (\w+)/; // Change this line
        let replaceText = "$3 $2 $1"; // Change this line
        let result2 = str.replace(fixRegex, replaceText);
    /*** Challenge ***/
    
// -------------- 2) Use Captue Groups to Search and Replace -------------- \\