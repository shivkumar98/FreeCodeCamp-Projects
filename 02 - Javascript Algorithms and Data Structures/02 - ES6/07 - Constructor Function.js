// -------------- Use class Syntax to Define a Constructor Function --------------- //

    // ES6 has the "class" keyword which makes it easier to create objects
    // In ES5, a claree declaration has a constructor method which can be invoked by "new"

    /*** Example 5:  ***/
    
    // Explicit constructor:
    class SpaceShuttle {
      constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
      }
      takeOff(){
        console.log("To "+ this.targetPlanet + "!")
      }
    }

    // Implicit constructor:
    class Rocket {
      launch(){ console.log("To the moon!")}
    }

    /*** Example 6:  ***/
    // Use the class keyword and write a constructor to create a Vegetable class
    // The Vegetable class allows you to create a vegetable object with property name that gets passed to the constructor

    // Only change code below this line
    class Vegetable {
      constructor(name) { this.name = name}
    }
    // Only change code above this line

    const carrot = new Vegetable('carrot');
    console.log(carrot.name); // Should display 'carrot'
        
// -------------- Use class Syntax to Define a Constructor Function --------------- //
