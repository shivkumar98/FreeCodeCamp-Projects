# Project 14: Learn CSS Grid by Building a Magazine


## CSS Grid System:
The CSS Grid System is a 2-dimensional grid-based layout. It allows for horizontal and vertical centering.

We can set a container to follow the frid system by setting:

    display: grid;

We can set the set the column and row sizes by specifying the following properties:

- grid-template-columns
- grid-template-rows


### minmax(a,b) function:
We can use this function to make the grid responsive.
The minmax(a,b) function can be used to specify the value of the above properties, ensuring that the lenght is: a ≤ length ≤ b
We can use min-content and max-content as parameters

### fr unit
We can use the unit fr as a way of desribing the ratio of the lengths for the grid system. E.gg if the column grid is desribed as 1fr 2fr then the first column will always be half of the second column.

### row-gap Property:

We can make spacing between elements of the grid by specifying the row-gap property


### grid-autoflow
This property specifies how items are autoplaced in the flow of the grid

### ::first-letter
This pseudo-selector lets us target the first letter of a selection