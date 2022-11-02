// --------------- Use getters and setters to Control Access to an Object ----------------- //

    /*** Example 1: ***/
    // we cann create setters and getters for a class:

    class Book {
        constructor(author){ this.author = author}
        get writer() { return this.author}
        set writer(updatedAuthor){ this.author = updatedAuthor}
    }

    /*** Challenge: ***/
    /*  Use the class keyword to create a Thermostat class. 
        The constructor accepts a Fahrenheit temperature.

        Create a getter to obtain the temperature in Celcius and a setter to set the temperature in Celcius.

        C = 5/9 * (F - 32); F = C* 9.0 / 5 + 32;
    */

    // Only change code below this line
    class Thermostat {
        constructor(fahrenheight){ this._temperature = (5/9 * (fahrenheight-32)) }
        get temperature() { return this._temperature } 
        set temperature(temp) { this._temperature = temp}
    }

    const thermos = new Thermostat(76); // Setting in Fahrenheit scale
    let temp = thermos.temperature; // 24.44 in Celsius
    thermos.temperature = 26;
    temp = thermos.temperature; // 26 in Celsius
            


// --------------- Use getters and setters to Control Access to an Object ----------------- //