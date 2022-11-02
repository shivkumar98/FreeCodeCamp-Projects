// ------------------ Write Concise Object Literal Declarations Using Object Property Shorthand -------------------- //

      // ES6 has alot of syntactic sugar, for example if we wanted to get the mouse position we could write:

      const getMousePosition = (x, y) => ({
        x: x,
        y: y
      });
    
    // but there is a nicer way to write this:

    const getMousePosition2 = (x, y) => ({x, y})

    /*** Example 1: ***/
    // Use object property shorthand with object literals to create and return an object with name, age and gender properties.

    const createPerson = (name, age, gender) => {
      // Only change code below this line
      return {name, age, gender} // using round brackets here would not work!
      // Only change code above this line
    };

    console.log(createPerson("Zodiac Hasbro", 56, "male"))

// ------------------ Write Concise Object Literal Declarations Using Object Property Shorthand -------------------- //




// ------------------ Write Concise Declarative Functions with ES6 -------------------- //

      /*** Example 3:  ***/
      // if we wanted to create a function within an object, we can write:

      const person2 = {  name: "Taylor",
                        sayHello: function(){
                          return `Hello my name is ${this.name}`
                        }
                      }
      // ES6 allows us to write this as:
      const person3 = { name: "Taylor",
                        sayHello() {
                          `Hello my name is ${this.name}`
                        }
                      }

    /*** Example 4: ***/
    // Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

    // Only change code below this line
    const bicycle = {
      gear: 2,
      setGear(newGear) {
        this.gear = newGear;
      }
    };
    // Only change code above this line
    bicycle.setGear(3);
    console.log(bicycle.gear);

// ------------------ Write Concise Declarative Functions with ES6 -------------------- //