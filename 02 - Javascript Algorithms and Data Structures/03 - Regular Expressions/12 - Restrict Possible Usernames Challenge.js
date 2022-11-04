// ------------ Restrict Possible Usernames Challenge ------------- \\

    // You need to check all usernames in a database. Here are some rules for creating username:
    /*
        1) Usernames can only use alpha-numberic characters
        2) Numbers must be at the end of a username
        3) The username can be mixed case
        4) Usernames must be atleast two characters long, 2 character usernames must be only alphabets
    */
        // change the regex so it fits the constraints of the above
        let username = "JackOfAllTrades";
        let userCheck = /^[a-z][a-z]$|^[a-z][a-z]+$|^[a-z]+\d\d+$|^[a-z][a-z]+\d+$/ig; // Change this line
        let result = userCheck.test(username);

        console.log("BadUs3rnam3: "+"BadUs3rnam3".match(userCheck))
        console.log("A1: "+"A1".match(userCheck))
        console.log("Z97: "+"Z97".match(userCheck))

// ------------ Restrict Possible Usernames Challenge ------------- //