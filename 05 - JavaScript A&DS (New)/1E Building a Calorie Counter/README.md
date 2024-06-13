# 🧠 1E Learning Form Validation by Building a Calorie Counter
* In this exervice, I will learn how to accept input from user
* I will learn how to validate input, perform calculations, and dynamically update your interface to display the results.
* I will learn regex, template literals, and `addListener()` method.

## Final Product

## 🟥 Project Setup
* I have the following HTML:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Calorie Counter</title>
  </head>
  <body>
    <main>
      <h1>Calorie Counter</h1>
      <div class="container">

      </div>
    </main>
  </body>
</html>
```
* CSS:
```css
:root {
  --light-grey: #f5f6f7;
  --dark-blue: #0a0a23;
  --fcc-blue: #1b1b32;
  --light-yellow: #fecc4c;
  --dark-yellow: #feac32;
  --light-pink: #ffadad;
  --dark-red: #850000;
  --light-green: #acd157;
}

body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--fcc-blue);
  color: var(--light-grey);
}

h1 {
  text-align: center;
}

.container {
  width: 90%;
  max-width: 680px;
}

h1,
.container,
.output {
  margin: 20px auto;
}

label,
legend {
  font-weight: bold;
}

.input-container {
  display: flex;
  flex-direction: column;
}

button {
  cursor: pointer;
  text-decoration: none;
  background-color: var(--light-yellow);
  border: 2px solid var(--dark-yellow);
}

button,
input,
select {
  min-height: 24px;
  color: var(--dark-blue);
}

fieldset,
label,
button,
input,
select {
  margin-bottom: 10px;
}

.output {
  border: 2px solid var(--light-grey);
  padding: 10px;
  text-align: center;
}

.hide {
  display: none;
}

.output span {
  font-weight: bold;
  font-size: 1.2em;
}

.surplus {
  color: var(--light-pink);
}

.deficit {
  color: var(--light-green);
}
``` 

## 🟥 Writing HTML for Form
* Currently the webpage looks like:
![](screenshots/2024-06-08-13-24-55.png)

* I add a label and input for the calorie budget, its of type number and has minimum value of 0
```html
<form id="calorie-counter">
   <label for="budget">Budget</label>
   <input
   type="number"
   min="0"
   id="budget"
   placeholder="Daily calorie budget"
   required
   />
</form>
```
* Below the calorie budget, I create a fieldset for Breakfast:
```html
<fieldset id="breakfast">
   <legend>Breakfast</legend>
   <div class="input-container"></div>
</fieldset>
```
* I create fieldsets for lunch and dinner too:
```html
<fieldset id="lunch">
   <legend>Lunch</legend>
   <div class="input-container"></div>
</fieldset>
<fieldset id="dinner">
   <legend>Dinner</legend>
   <div class="input-container"></div>
</fieldset>
```
* I add two more fieldsets for Snacks and Exercise:
```html
<fieldset id="snacks">
   <legend>Snacks</legend>
   <div class="input-container"></div>
</fieldset>
<fieldset id="exercise">
   <legend>Exercise</legend>
   <div class="input-container"></div>
</fieldset>
```
* The website now looks like:
![](screenshots/2024-06-08-13-34-27.png)

* A user should be able to select the meal type (breakfast, lunch, etc), so I create a field for adding a entry:
```html
<div class="controls">
   <span>
      <label for="entry-dropdown">Add food or exercise:</label>
      <select id="entry-dropdown" name="options">
         <option value="breakfast" selected>Breakfast</option>
         <option value="lunch">Lunch</option>
         <option value="dinner">Dinner</option>
         <option value="snacks">Snacks</option>
         <option value="exercise">Exercise</option>
      </select>
      <button type="button" id="add-entry">Add Entry</button>
   </span>
</div>
```
* I set the `type` to `button` so the button does not submit
* The page now looks like:
![](screenshots/2024-06-08-13-58-22.png)
* I add two other buttons, one for submission, one to clear the form:
```html
<div>
   <button type="submit">Calculate Remaining Calories</button>
   <button id="clear" type="button">Clear</button>
</div>
```
* I create a div to display the result below the form:
```html
<div id="output" class="output hide"></div>
```
* Below the `main` element, I add the JavaScript:
```html
<script src="./script.js"></script>
```
* The page now looks like:
![](screenshots/2024-06-08-14-12-16.png)

## 🟥 Declaring Variables
* I declare a variable for my form:
```js
const calorieCounter = document.getElementById("calorie-counter");
```
* I declare a variable for the budget input:
```js
const budgetNumberInput = document.getElementById("budget");
```
* I declare a variable for the dropdown:
```js
const entryDropdown = document.getElementById("entry-dropdown");
```
* I add variables for the add entry and clear button:
```js
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear")
```
* I declare a variale for the output:
```js
const output = document.getElementById("output")
```
* I initialise a variable called `isError` which will be set to true if user provides invalid input:
```js
let isError = false;
```

## 🟥 Regular Expressions

* The budget input allows the user to enter `+` or `-` (e.g. +1.1 is a valid number).
* I declare a `cleanInputString` function which cleans up the input using regex:
```js
function cleanInputString(str) {

}
```
* I write the following regex, which will match for the word `hello`:
```js
const regex = \hello\; 
```
* I want to search for `+`, `-` and spaces. I write the following regex which searches for +, - (the + needs to be escaped with `\`):
```js
const regex = /\+-/;
```
* I use `\s` for whitespace characters:
```js
const regex = /\+-\s/;
```
* I want my regex to look for `+`, `-`, and whitespace in any order. To do this I create a character class by wrapping the characters in square brackets. I no longer need to escape the `+` character:
```js
const regex = /[+-\s]/;
```
* You can add flags after the closing `\`
* The global flag `g` instructs the regex to continue looking after it has found a match:
```js
const regex = /[+-\s]/g;
```
* I use the `.replace(regex, String)` method to replace the `+`, `-` and whitespace characters of the `str` parameter:
```js
function cleanInputString(str) {
   const regex = /[+-\s]/g;
   return str.replace(regex, "");
}
```
* I test my code:
```js
console.log(cleanInputString("+-99")); // 99
```

<br>

* HTML allows numbers in exponent notation (10e2 for e.g.)
* We want to filter these out, so I create a function called `isInvalidInput(str)`:
```js
function isInvalidInput(str) {

}
```
* I declare a regex variable which seeks for e, I use the `i` flag to make it case insensitive:
```js
const regex = /e/i;
```
* I use a character class range to find patterns where any number between 0-9 is before and after `e` is found:
```js
const regex = /[0-9]e[0-9]/i;
```
* The `+` modifier signifies a pattern which occurs ONE OR MORE times:
```js
const regex = /[0-9]+e[0-9]+/i;
```
* There is a shorthand for digits `\d`:
```js
const regex = /\d+e\d+/i;
```
* I use the String's `.match()` method which returns an array of matched, containing first match OR all matches if global flag is used
```js
const regex = /example/
constr result = "example string".match(regex) // ['example']
```
* I implement my `isInvalidInput()` function:
```js
function isInvalidInput(str) {
   const regex = \/d+e\d+/i;
   return str.match(regex);
}
```
* I test my function:
```js
console.log(isInvalidInput("1e3")); // Array [ "1e3" ]
console.log(isInvalidInput("10")); // null
```

<br>

* I create a function called `addEntry()`, to get the type, I use the `.value` property of the entryDropdown to construct a `targetId` variable:
```js
function addEntry() {
   const targetId = "#" + entryDropdown.value;
}
```
* I create a variable for `targetInputContainer`:
```js
function addEntry() {
   const targetId = "#" + entryDropdown.value;
   const targetInputContainer  = document.querySelector(targetId + " .input-container");
}
```
* I refactor the above code to use TEMPLATE LITERALS:
```js
function addEntry() {
  const targetId = '#' + entryDropdown.value;
  const targetInputContainer = document.querySelector(`${targetId} .input-container`);
}
```
* The code can be simplified:
```js
function addEntry() {
   const targetInputContainer = document
      .querySelector(`#{entryDropdown.value} .input-container`);
}
```


* The `querySelectorAll()` method returns a `NodeList`. I use this method to get the number of entries a user adds. I provide an argument of `input[type="text"]`:
```js
function addEntry() {
   const targetInputContainer = document
   .querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
}
```
* I create a `HTMLString` for a label and input for Name:
```js
const HTMLString = `
   <label for="${entryDropdown.value}-${entryName}-name">Entry ${entryNumber} Name</label>
   <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
`
```
* I add a label and input for Calories:
```js
const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>`;
```
* My function now looks like:
```js
function addEntry() {
   const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
   const entryNumber = targetInputContainer
      .querySelectorAll('input[type="text"]').length;
   const HTMLString = `
   <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
   <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
   <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
   <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>`;
}
```

* I use the `innerHTML` property of the `targetInputContainer` to add the content of `HTMLString`:
```js
targetInputContainer.innerHTML += HTMLString;
```

## 🟥 Event Listeners
* We previously assigned the `.onclick` property of a button to a function to execute code on the click
* We can also use theh `.addEventListener()` to do this:
```js
addEntryButton.addEventListener("click", function() {console.log("hello")}); // prints hello when Add Entry is clicked
```
* At the bottom of my script, I add the following to call the `addEntry()` function:
```js
addEntryButton.addEventListener("click", addEntry)
```

## 🟥 Ironing out Bugs🕷️
* Currently the first entry number is 0
![](screenshots/2024-06-10-14-09-28.png)
* I fix this by adding one to `entryNumber` where its initialised:
```js
const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
```

<br>

* Another bug is when you fill in one entry, click Add Entry and the existing entry clears out:
![](screenshots/bug-2.gif)
* This is because the values in the inputs are not saved into the `.innerHTML` property
* We can use the built in `insertAdjacentHTML()` method, which takes postion as first argument, and HTML to add as second argument.
* We can use `"beforeend"` to position it as the last child of the element:
```js
targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
```
* Now the app behaves as expected:
![](screenshots/bug-2-fixed.gif)

## 🟥 Getting Calories From Inputs
* I create a function to calculates the calories from a list:
```js
function getCaloriesFromInputs(list) {
   let calories = 0;

   for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
   }
}
```

* I treat `invalidInputMatch` as a truthy value (if null its false) and alert a message which contains the first elemment of the array:
```js
function getCaloriesFromInputs(list) {
   let calories = 0;
   for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
      if (invalidInputMatch) {
         alert(`Invalid Input : ${invalidInputMatch[0]}`);
      }
   }
}
```
* Within the if block, I set `isError` to true and return null:
```js
if (invalidInputMatch) {
   alert(`Invalid Input : ${invalidInputMatch[0]}`);
   isError = true;
   return null;
}
```
* Now I want to add the currVal to the calories when it is valid in order to convert currVal into an actual number, I can use the `Number` class's constructor which has the following behaviour:
```js
Number('1000'); // 1000
Number('fdjsf'); // NaN
```
```js
function getCaloriesFromInputs(list) {
   let calories = 0;
   for (const item of list)  {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);

      if (invalidInputMatch) {
         alert(`Invalid Input : ${invalidInputMatch[0]}`);
         isError = true;
         return null;
      }
      calories += Number(currVal);
   }
   retun calories;
}
``` 

## 🟥 Calculating Calories
* I declare an empty function which has a parameter `e` - this is a commmon name for the event listeners
```js
function calculateCalories(e) {

}
```
* I will attach this function to the submission of the form
* The `summbit` event is triggered when the form is submitted, the default behaviour is to reload the page. We can prevent this by calling `.preventDefault()`
```js
function calculateCalories(e) {
   e.preventDefault();
   isError = false;
}
```