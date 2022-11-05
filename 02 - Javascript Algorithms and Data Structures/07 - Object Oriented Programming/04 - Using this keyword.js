// --------------- Using this keyword --------------- \
    // using the this keyword is beneficial for accessing a propeerty versus using the name of object with dot notation
    // if object name changes, then method must be redefined
    
    /*** Example ***/
        let duck = {
            name: "Aflac",
            numLegs: 2,
            sayName: function() {return "The name of this duck is " + this.name + ".";}
        };
    /*** Example ***/
    
    /*** Challenge ***/
        // modify saysLegs method
        let dog = {
            name: "Spot",
            numLegs: 4,
            sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
          };
          
          dog.sayLegs();
    /*** Challenge ***/
// --------------- Using this keyword --------------- \