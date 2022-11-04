// --------------- Check For Mixed Groupings of Characters --------------- \\

    // we can check for groups of characters using ()
    // E.g. if we wanted to match Pumpkin or Penguin
    //      then the regex would be: /P(umpk|engu)in/

    /*** Challenge ***/
        // fix the regex to check for name of Franklin Roosevelt or Eleanor Roosevelt
        // it should make concessions for middle names
   
        let myString = "Eleanor Roosevelt";
        let myRegex = /(Franklin|Eleanor) .*Roosevelt/; // Change this line
        let result = myRegex.test(myString); // Change this line
        // After passing the challenge experiment with myString and see how the grouping works
    /*** Challenge ***/

// --------------- Check For Mixed Groupings of Characters --------------- \\