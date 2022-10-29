// ------------------- Build JavaScript Objects ------------------------- //

// objects are like arrays except elements are accessed via properties

// here is an example of a cat object:

const cat = {
    "name": whiskers,
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
}

/* Example 1:

Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
*/

const myDog = {
    // Only change code below this line
    "name": "Scooby",
    "legs": 4,
    "tails": 1,
    "friends": ["Shaggy"]
  
    // Only change code above this line
  };

// ------------------- Build JavaScript Objects ------------------------- //




// --------------- Accessing Object Properties with Dot Notation ---------------- //

        // properties can be accessed either by dot notation or bracket notation

        // if the property name has whitespace then you must use bracket notation

        /* example 2:

        Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
        */

        // Setup
        const testObj = {
          "hat": "ballcap",
          "shirt": "jersey",
          "shoes": "cleats"
        };
        
        // Only change code below this line
        const hatValue = testObj.hat;      // Change this line
        const shirtValue = testObj.shirt;    // Change this line

// --------------- Accessing Object Properties with Dot Notation ---------------- //




// ------------------ Accessing Object properties with Bracket Notation ---------------------------- //

        /*** Example 3: ***/
        // Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
        
        // Setup
        const testObj1 = {
          "an entree": "hamburger",
          "my side": "veggies",
          "the drink": "water"
        };

        // Only change code below this line
        const entreeValue = testObj1["an entree"];   // Change this line
        const drinkValue = testObj1["the drink"];    // Change this line

// ------------------ Accessing Object properties with Bracket Notation ---------------------------- //




 // ------------------ Accessing Object Properties with Variables ----------------------------//

        // we can access a property using bracket notation and supplying a parameter

        /*** Example 4: ***/
        //Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.


        // Setup
        const testObj2 = {
            12: "Namath",
            16: "Montana",
            19: "Unitas"
          };
        
        // Only change code below this line
        const playerNumber = 16;  // Change this line
        const player = testObj2[playerNumber];   // Change this line

  // ------------------ Accessing Object Properties with Variables ----------------------------//




  // ------------------------- Updating Object Properties ------------------------------------//

        // properties can be updated directly either by dot or bracket notation

        /* example 5:

        Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
        */

        // Setup
        const myDog1 = {
          "name": "Coder",
          "legs": 4,
          "tails": 1,
          "friends": ["freeCodeCamp Campers"]
        };
        
        // Only change code below this line
        myDog1["name"] = "Happy Coder"
  
  // ------------------------- Updating Object Properties ------------------------------------//




  // ----------------------- Add New Properties to a JavaScript Object ---------------------------- //

        // we can add new properties using bracket/dot notation

        /***  Example 6: ***/
        //Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.


        const myDog2 = {
          "name": "Happy Coder",
          "legs": 4,
          "tails": 1,
          "friends": ["freeCodeCamp Campers"]
        };
        
        myDog2.bark = "woof!"
 
// ----------------------- Add New Properties to a JavaScript Object ---------------------------- //




// --------------- Delete Properties from a JavaScript Object -------------------------- //

// we can delete properties using delete keyword

      /*** Example 7: ***/
        // Delete the tails property from myDog. You may use either dot or bracket notation.


        // Setup
        const myDog3 = {
            "name": "Happy Coder",
            "legs": 4,
            "tails": 1,
            "friends": ["freeCodeCamp Campers"],
            "bark": "woof"
          };
        
        // Only change code below this line
      delete myDog3.tails  

// --------------- Delete Properties from a JavaScript Object -------------------------- //




// --------------------- Using Objects for Lookups ------------------------ //

      // we can treat objects as dictionaries

      /***  example 8: ***/
      // Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

      // Setup
      function phoneticLookup(val) {
          let result = "";
        
          // Only change code below this line
          const dict = {
              "alpha": "Adams",
              "bravo": "Boston",
              "charlie": "Chicago",
              "delta": "Denver",
              "echo": "Easy",
              "foxtrot": "Frank"
          }

          result = dict[val]
          // Only change code above this line
          return result;
      }
      
      phoneticLookup("charlie");

// --------------------- Using Objects for Lookups ------------------------ //




// ---------------------- Testing Objects for Properties --------------------- //
      
      // hasOwnProperty("someproperty") returns whetther an object has a property name

      /*** Example 9: ***/
      // Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

      function checkObj(obj, checkProp) {
          // Only change code below this line
          if(obj.hasOwnProperty(checkProp)){
              return obj[checkProp]
          } else {
              return "Not Found"
          }
          // Only change code above this line
      }

// ------------------- Using Objects for Lookups ------------------------ //
