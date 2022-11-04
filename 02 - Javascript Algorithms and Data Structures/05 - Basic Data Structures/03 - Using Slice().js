// ----------------- Copy Array Items Using slice() ----------------- \\

    // the slice() method extracts and copies elements from an array without modifying it
    // the slice() method takes a start index and end index

    /*** Example ***/
    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
    let todaysWeather = weatherConditions.slice(1,3)
    console.log(todaysWeather) // [ 'snow', 'sleet' ]
    console.log(weatherConditions.slice(1,1))

    /*** Example ***/

// ----------------- Copy Array Items Using slice() ----------------- \\