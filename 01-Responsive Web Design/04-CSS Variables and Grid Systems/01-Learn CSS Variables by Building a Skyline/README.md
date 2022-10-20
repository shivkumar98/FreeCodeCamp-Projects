# Project 13: Learn CSS Variables by Building a Skyline
 
 In this project I will be replicating the following HTML and CSS:

 <img src="Screenshot.PNG" width="500px">

 ## Note on CSS variables: 

 To declare a CSS variable, you need two dashes (--). E.g.:

    --buildingcolor: #999;

To use a CSS variables as a property you write var() and insert the CSS variable name in the brackets, e.g.:

    background-color: var(--buildiing-color1);

We can use setback values for the var function if there is a problem with getting the variable. E.g.:

    background-color: var(--buildiing-color1, green);
