// --------------- Remeber to Set Constructor Property --------------- \
    // when we set the protoype to a new object, then the constructor property is erased
    
    /*** Example ***/
        Bird.prototype = {
            constructor: Bird,
            numLegs: 2,
            eat: function() {
            console.log("nom nom nom");
            },
            describe: function() {
            console.log("My name is " + this.name); 
            }
        };
    /*** Example ***/
    
    /*** Challenge ***/
        // define the constructor property on the Dog prototype
        function Dog(name) {
            this.name = name;
          }
          
          // Only change code below this line
          Dog.prototype = {
            constructor: Dog,
            numLegs: 4,
            eat: function() {
              console.log("nom nom nom");
            },
            describe: function() {
              console.log("My name is " + this.name);
            }
          };
    /*** Challenge ***/
// --------------- Remeber to Set Constructor Property --------------- \