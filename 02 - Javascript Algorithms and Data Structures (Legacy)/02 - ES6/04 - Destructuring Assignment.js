// ---------- 1) Use Destructuring Assignment to Extract Values from Objects ------------ //
    // we can use destructuring to copy the properties of an object into variables

    /***    Example 1: ***/
            const user = { name: 'John Doe', age: 34 };

            /* the normal way to get the properties of the user objects is:*/
            //const name = user.name;
            //const age = user.age;

            // destructuring lets us do this in one line

            const {name, age} = user;
            console.log(name) // returns John Doe

    /**     Example 2: ***/
            /* Replace the two assignments with an equivalent destructuring assignment.
            It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
            BEFORE:
            const HIGH_TEMPERATURES = {
                yesterday: 75,
                today: 77,
                tomorrow: 80
            };

            const today = HIGH_TEMPERATURES.today;
            const tomorrow = HIGH_TEMPERATURES.tomorrow;   */

            const HIGH_TEMPERATURES = {
                yesterday: 75,
                today: 77,
                tomorrow: 80
            };

            const { today, tomorrow } = HIGH_TEMPERATURES


// ---------- 1) Use Destructuring Assignment to Extract Values from Objects ------------ //




// ---------- 2) Use Destructuring Assignment to Assign Variables from Objects  ---------- //

    // we can also use destructuring to assign to new variables
    
    /*** Example 3: ***/
    const user2 = { name: 'John Doe', age: 34 };
    
    const { name: username, age: userage } = user2

    console.log(username) // John Doe
    console.log(userage) // 34

    /*** Example 4: ***/
    /* BEFORE:
    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };
    const highToday = HIGH_TEMPERATURES.today;
    const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
    */

    const { today: highToday, tomorrow:highTomorrow } = HIGH_TEMPERATURES
    
// ---------- 2) Use Destructuring Assignment to Assign Variables from Objects  ---------- //




// ---------- 3) Use Destructuring Assignment to Assign Variables from Nested Objects ---------- //

    /*** Example 4: ***/
    /* Replace the two assignments with an equivalent destructuring assignment. 
    It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
    BEFORE:
    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };
    const lowToday = LOCAL_FORECAST.today.low;
    const highToday2 = LOCAL_FORECAST.today.high;
    */

    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };

    const { today: { low: lowToday, high: highToday2 } } = LOCAL_FORECAST


// ---------- 3) Use Destructuring Assignment to Assign Variables from Nested Objects ---------- //




// ---------- 4) Use Destructuring Assignment to Assign Variables from Arrays ---------- //

    // we can use destructuring to specific elements from an object

    /*** Example 5:  ***/
    const [x,y] = [1, 2, 3, 4, 5, 6];
    console.log(x) // 1
    console.log(y) // 2

    const[i, , , j, , k] = [1,2,3,4,5,6,7]
    console.log("i, j, k: "+ i + " "+ j+ " " + k) /// i, j, k: 1 4 6

    /***Example 6: ***/
    /*
    Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
    */
    let a = 8, b = 6;
    [a,b] = [b,a]
    console.log(a) // 6
    console.log(b) // 8

// ---------- 4) Use Destructuring Assignment to Assign Variables from Arrays ---------- //




// ---------- 5) Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements ---------- //

    /*** Example: 7 */
    /*
    Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice()
    so that arr is a sub-array of the original array source with the first two elements omitted.
    */

    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo(list) {
        [first, second, ...array] = list
        return array
    }
    const arr = removeFirstTwo(source);
    console.log(arr)

// ---------- 5) Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements ---------- //




// ---------- 6) Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements ---------- //

    /*** Example: 7 */
    /*
    Use destructuring assignment within the argument to the function half to send only max and min inside the function.
    */
    const stats = {
        max: 56.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
      };
      
      // Only change code below this line
      const half = ({max, min}) => ((min+max)/2) 

      console.log(half(stats))
      // Only change code above this line

// ---------- 6) Use Destructuring Assignment to Pass an Object as a Function's Parameters ---------- //

