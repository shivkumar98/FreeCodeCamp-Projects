// ------------------ Add Key Value Pairs to JavaScript Objects ------------------ \\

    // at the most basic, objects are just key-value pairs
    /*** Example ***/
        let overwatchCharacter = {
            player: 'Lucio',
            ultimate: 'Give yourself to the rhthym',
            role: 'support'
        }
        // we can add a new properties:
        overwatchCharacter.healthPoints = 200
        overwatchCharacter['ShieldPoints'] = 20
        // the bracket notation is required if your property has a space in it
        // I.e. overwatchCharacter.First Name = 'Lucio' will not work
        // we can use the bracket notation to add a variable as a property
        const eyes = 'eye color'
        overwatchCharacter[eyes] = 'brown'
        /* {
            player: 'Lucio',
            ultimate: 'Give yourself to the rhthym',
            role: 'support',
            healthPoints: 200,
            ShieldPoints: 20,
            'eye color': 'brown'
        } */

    /*** Example ***/

    /*** Challenge ***/
        // add three more properties to foods
        // bananas: 13
        // grapes: 35
        // strawberries: 27
        let foods = {
            apples: 25,
            oranges: 32,
            plums: 28
        };
          
        // Only change code below this line
        foods.bananas = 13
        foods.grapes = 35
        foods.strawberries = 27
        // Only change code above this line
        console.log(foods);
    /*** Challenge ***/
    

// ------------------ Add Key Value Pairs to JavaScript Objects ------------------ \\