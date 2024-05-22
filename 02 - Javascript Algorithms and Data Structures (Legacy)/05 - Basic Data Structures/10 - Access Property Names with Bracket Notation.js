// --------------- Access Property Names with Bracket Notation --------------- \
    // the bracket notation allows us to access a property in a more dynamic array

    /*** Challenge ***/
        // return the current calue of the scannedItem key in the foods object
        let foods = {
            apples: 25,
            oranges: 32,
            plums: 28,
            bananas: 13,
            grapes: 35,
            strawberries: 27
          };
          
          function checkInventory(scannedItem) {
            // Only change code below this line
            return foods[scannedItem]
            // Only change code above this line
          }
          
          console.log(checkInventory("apples"));
    /*** Challenge ***/
    
// --------------- Access Property Names with Bracket Notation --------------- \