// --------------- Override Inherited Methods --------------- \
    // we can inherit methods from another object by referencing its prototype
    // e.g. ChildObject.prototype = Object.create(ParentObject.prototype)
    // we then chain on methods to the prototype
    // e.g. ChildObject.prototype.method = function() { ... }

    // we can override an inherited method in the same way by chaining the prototype

    /*** Example ***/
        function Animal() { }
        Animal.prototype.eat = function() {
        return "nom nom nom";
        };
        function Bird() { }
        
        Bird.prototype = Object.create(Animal.prototype);
        
        Bird.prototype.eat = function() {
        return "peck peck peck";
        };
    /*** Example ***/
    
    /*** Challenge ***/
        // override the fly() method in Penguin
        function Bird() { }

        Bird.prototype.fly = function() { return "I am flying!"; };

        function Penguin() { }
        Penguin.prototype = Object.create(Bird.prototype);
        Penguin.prototype.constructor = Penguin;

        // Only change code below this line

        Penguin.prototype.fly = function() {
            return "Alas, this is a flightless bird.";
        }

        // Only change code above this line

        let penguin = new Penguin();
        console.log(penguin.fly());
    /*** Challenge ***/
// --------------- Override Inherited Methods --------------- \