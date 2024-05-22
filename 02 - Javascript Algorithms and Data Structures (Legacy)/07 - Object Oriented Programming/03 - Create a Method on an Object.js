// --------------- Create a Method on an Object --------------- \
   // methods are properties which are functions
   
   /*** Example ***/
        let duck = {
            name: "Aflac",
            numLegs: 2,
            sayName: function() {return "The name of this duck is " + duck.name + ".";}
        };
        duck.sayName();
   /*** Example ***/
   
   /*** Challenge ***/
        // use the object and give it a method 'sayLegs'
        let dog = {
            name: "Spot",
            numLegs: 4,
            sayLegs: function() {return `This dog has ${this.numLegs} legs.`}
          };
          
          dog.sayLegs();
   /*** Challenge ***/
    
// --------------- Create a Method on an Object --------------- \