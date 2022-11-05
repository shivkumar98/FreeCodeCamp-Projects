// --------------- Set the Child's Prototype to an Instance of the Parent --------------- \
    // we now need to set the prototype

    /*** Example ***/
        Bird.prototype  = Object.create(Animal.prototype)
    /*** Example ***/
    
    /*** Challenge ***/
        // Modify the code so that instances of Dog inherit from Animal.
        function Animal() { }

        Animal.prototype = {
        constructor: Animal,
        eat: function() {
            console.log("nom nom nom");
        }
        };

        function Dog() { }

        // Only change code below this line
        Dog.prototype = Object.create(Animal.prototype)

        let beagle = new Dog();
    /*** Challenge ***/
    
// --------------- Set the Child's Prototype to an Instance of the Parent --------------- \