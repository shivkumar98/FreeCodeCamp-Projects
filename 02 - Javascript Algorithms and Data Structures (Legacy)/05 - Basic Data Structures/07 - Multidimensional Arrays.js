// ------------- Create Complex Multi-dimensional Arrays ------------- \\

    // we can nest arrays within arrays
    let nestedArray = [
        ['deep'],[['deeper'],['deeper']], [[['deepest'],['deepest']],[[['deepest-est?']]]]
    ];
    console.log(nestedArray[1][0]) // [ 'deeper' ]

    /*** Challenge ***/
        // modify myNestedArray using any combination of strings, numbers and booleans so it has exactly 5 depth levels
        // somewhere on the third level, include the string "deep"
        // on the fourth level, include the string "deeper"
        // on the fifth level, include the string "deepest"
        let myNestedArray = [
            // Only change code below this line
            ['unshift', false, 1, 2, 3, 'complex', 'nested',
                ['deep', true, [
                        'deeper', [ 'deepesy', [ true ] ]
                    ]
                ]
            ],
            ['loop', 'shift', 6, 7, 1000, 'method'],
            ['concat', false, true, 'spread', 'array'],
            ['mutate', 1327.98, 'splice', 'slice', 'push'],
            ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
            // Only change code above this line
          ];

    /*** Challenge ***/
      
// ------------- Create Complex Multi-dimensional Arrays ------------- \\