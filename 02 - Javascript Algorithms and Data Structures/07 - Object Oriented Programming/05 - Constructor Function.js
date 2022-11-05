// --------------- 1) Define a Constructor Function --------------- \
    // constructors are functions that create new functions

    /*** Example ***/
        function Bird() {
            this.name = "Albert";
            this.color = "blue";
            this.numLegs = 2;
        }
        // constructors are often defined with a captial letter
        // conmstructors define preoperties and behaviours rather than return a value
    /*** Example ***/
    
    /*** Challenge ***/
        // create a constructor Dog
        function Dog(){
            this.name="Scooby";
            this.color="brown"
            this.numLegs = 4
        }
    /*** Challenge ***/
    
// --------------- 1) Define a Constructor Function --------------- \



// --------------- 2) Use a Constructor to Create Objects --------------- \
    /*** Example ***/
        function Bird() {
            this.name="albert"
            this.color="green"
            this.numLegs = 2
        }
        let bird = new Bird();
        // here we are calling the constructor using the "new" keyword
    /*** Example ***/
    
    /*** Challenge ***/
        // create a dog object
        function Dog() {
            this.name = "Rupert";
            this.color = "brown";
            this.numLegs = 4;
          }
          // Only change code below this line
          let hound = new Dog()
    /*** Challenge ***/
    
// --------------- 2) Use a Constructor to Create Objects --------------- \



// --------------- 3) Extend Constructors to Receive Arguments --------------- \
    // we can allow the constructor to take arguments to set the value of properties

    /*** Example ***/
        function Bird(name, color) {
            this.name = name;
            this.color = color;
            this.numLegs = 2;
        }
      
    /*** Example ***/
    
    /*** Challenge ***/
        // create another Dog constructor where the legs are fixed to 4
        function Dog(name, color) {
            this.name = name
            this.color = color
            this.numLegs = 4
        }
        let terrier = new Dog("terry", "black")
    /*** Challenge ***/
    
// --------------- 3) Extend Constructors to Receive Arguments --------------- \



// --------------- 4) Verify an object's constructor using instanceof --------------- \
    // when a new object is instantiated, an instance of the constructor is created
    // we can confirm that an object is indeed an instance of a constructor using instanceof
    
    /*** Example ***/
        let Bird2 = function(name, color) {
            this.name = name;
            this.color = color;
            this.numLegs = 2;
        }
        
        let crow = new Bird2("Alexis", "black");
        
        console.log(crow instanceof Bird2); // true
        crow['madeUpProperty'] = true;
        console.log(crow instanceof Bird2) // true
    /*** Example ***/
    
    /*** Challenge ***/
        // create an instance of House constructor
        function House(numBedrooms) {
            this.numBedrooms = numBedrooms;
        }
          
        // Only change code below this line
        let myHouse = new House(2)
        myHouse instanceof House
    /*** Challenge ***/
// --------------- 4) Verify an object's constructor using instanceof --------------- \
