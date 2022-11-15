# 7 - Object-Oriented Programming

## Contents:

1) [**JavaScript Objects**](#71-javascript-objects)

<hr>
 
 ## 7.1 JavaScript Objects

### 7.1.1 Creating Objects With Methods and Properties

 * We can easily declare an object with properties and methods using {} braces

 * E.g.:

        let Dog = { name: "Scooby",
                    legs: "4",
                    sayName: function(){
                        console.log("My name is "+Dog.name)
                    }}

* It is better to use the "this" keyword rather than the object's name in methods as this can be modified:

        let Dog = { name: "Scooby",
                    legs: "4",
                    sayName: function(){
                        console.log("My name is "+this.name)
                    }}

### 7.1.1 Defining Constructors

* Constructors are used to build objects in a standardised way

* E.g.:

        function Bird(){
            this.legs = 2
            this.name = "parrot"
        }

* We can define constructors to take arguments from user:

        function Bird(legs, name){
            this.legs = legs;
            this.name = name;
        }