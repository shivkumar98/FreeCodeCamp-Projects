// -------------- Find One or More Criminals in a Hunt -------------- \\

    /*** Challenge ***/
        // A group of criminals escaped from jail and ran away, but you don't know how many.
        // You do know that they stay close together when they are around other people.
        // You are responsible for finding all of the criminals at once.

        // Write a greed regex that finds one or more criminals within a group of other people.
        // A criminal is represented by the captial letter C

        // 1)Your regex should match one criminal (C) in the string C
        // 2) Your regex should match two criminals (CC) in the string CC
        // 3) Your regex should match three criminals (CCC) in the string P1P5P4CCCcP2P6P3.
        // 4) Your regex should match five criminals (CCCCC) in the string P6P2P7P4P5CCCCCP3P1
        // 5) Your regex should not match any criminals in the empty string ""
        // 6) Your regex should not match any criminals in the string P1P2P3
        // 7) Your regex should match fifty criminals (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) in the string P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.

        let reCriminals = /C+/g; // Change this line

        let String1 = "C"
        console.log(String1.match(reCriminals))
        let String2 = "CC"
        console.log(String2.match(reCriminals))
        let String3 = "P1P5P4CCCcP2P6P3"
        console.log(String3.match(reCriminals))
        let String4 = "P6P2P7P4P5CCCCCP3P1"
        console.log(String4.match(reCriminals))
        let String5 = ""
        console.log(String5.match(reCriminals))
        let String6 = "P1P2P3"
        console.log(String6.match(reCriminals))

    /*** Challenge ***/

// -------------- Find One or More Criminals in a Hunt -------------- \\