// --------------- Change the Prototype to a new object --------------- \
    // setting multiple protype properties can be tedious
    // a more efficient way is to assign it to a object

    /*** Example ***/
        function Bird(name){
            this.name = name;
        }
        Bird.prototype = {
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
        // add the property numLegs andt two methods: eat() and describe()
        function Dog(name) {
            this.name = name;
          }
          
          Dog.prototype = {
            // Only change code below this line
            numLegs: 2,
            eat(){ },
            describe() {}
          };
    /*** Challenge ***/
    
// --------------- Change the Prototype to a new object --------------- \