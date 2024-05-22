// --------------- Use Inheritance So You Don't Repeat yourself --------------- \
    /*** Example ***/
    Bird.prototype = {
        constructor: Bird,
        describe: function() {
          console.log("My name is " + this.name);
        }
      };
      
      Dog.prototype = {
        constructor: Dog,
        describe: function() {
          console.log("My name is " + this.name);
        }
      };
      // we can see the describe methods have the exact same implementation
      // we can make this DRY by creating a supertype:
      function Animal() {}

      Animal.prototype = {
        constructor: Animal,
        describe: function(){
            console.log("My name is " + this.name);
        }
      }

      // we can now remove the describe methods
      
    /*** Example ***/
    
    /*** Challenge ***/
        // make the code DRY
        function Cat(name) {
            this.name = name;
        }
        
        Cat.prototype = {
            constructor: Cat,
            eat: function() {
            console.log("nom nom nom");
            }
        };
        
        function Bear(name) {
            this.name = name;
        }
        
        Bear.prototype = {
            constructor: Bear,
            eat: function() {
            console.log("nom nom nom");
            }
        };
        
        function Animal() { }
      
    /*** Challenge ***/
    
// --------------- Use Inheritance So You Don't Repeat yourself --------------- \