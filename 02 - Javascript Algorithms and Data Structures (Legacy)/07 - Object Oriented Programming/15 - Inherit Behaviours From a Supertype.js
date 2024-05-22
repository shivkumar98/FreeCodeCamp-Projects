// --------------- Inherit Behaviours From a Supertype --------------- \
    
    // We COULD instantiate subclasses as: let animal = new Animal() but this has disadvantages
    // it is better to instantiate like this: let animal = Object.create(Animal.prototype);
    
    /*** Challenge ***/
        // Use Object.create to make two instances of Animal named duck and beagle.
        function Animal() { }

        Animal.prototype = {
        constructor: Animal,
        eat: function() {
            console.log("nom nom nom");
        }
        };

        // Only change code below this line

        let duck = Object.create(Animal.prototype); // Change this line
        let beagle = Object.create(Animal.prototype); // Change this line
    /*** Challenge ***/
// --------------- Inherit Behaviours From a Supertype --------------- \