# 🧠 3D - Learn Functional Programming by Building a Spreadsheet
* Functional programming is a popular approach to software development where code is organised into smaller functions which are combined to building complex programs
* In this spreadsheet application project, I will learn about parsing and evaluating mathematical expressions, implement spreadsheet functions, handling cell references and dynamically updating the page based on user input
* I will cover convepts like `map()`, `find()`, `includes()`, and `parseInt()`

## 👨‍🍳 Final Product TODOOOOOOOO 👨‍🍳
* You can try out the application I built in this tutorial via this [link](TODOOOOOOOOOO)

## 📝 Summary Notes TODOOOOOOOOOO 📝
* The `window` object represent the browser window, you can define behaviour of the window when the HTML, CSS and scripts have finished loading using the `.onload` property
* You can define nested functions which enables the function to reuse logic without having the logic globally defined:
```js
const outer = () => {
   const inner = () => { }
}
```

## 🟥 1. Project Setup 🛠️

* I have been provided the [HTML](code/index.html) and [CSS](code/styles.css)

## 🟥 Programtically Generate Cells
* I have been supplied with a HTML container and some CSS. My first task is to programtically generate cells for your spreadsheet
* The global `window`  represents the browser window. It has `.onload` property which lets you define functionality when the window has loaded the entire page, including CSS and scripts.
* I set the onload property of window to a function which obtains the `#container` div:
```js
window.onload = () => {
   const container = document.getElementById("container");
}
```

### 🔴 Nested Functions
* Nested functed functions allow a function to reuse logic.
* I create a nested function to create a label:
```js
window.onload = () => {
   const container = document.getElementById("container");
   const createLabel = (name) => {
      
   }
}
```
* I implement the `crateLabel` function using the `createElement()`, adn `appendChild()` methods to add element to the `#container`:
```js
const createLabel = (name) => {
   const label = document.createElement("div");
   label.className = "label";
   label.textContent = name;
   container.appendChild(label);
}
```

### 🔴 Creating Range Function
* I need to create a function which will create an array of numbers ranging from a starting value and ending value
* I initialise my `range` function by returning an array:
```js
const range = (start, end) => Array();
```
* If I need to create a range from 1-3, the number of elements will be `end`-`start`+1 = 3. 
* I need intiialise my array with a lengh, so I use the above logic to do this:
```js
const range = (start, end) => Array(end - start + 1);
```
* I chain the `fill()` method to the constructor, and fill the array with the `start` parameter:
```js
const range = (start, end) => Array(end - start + 1)
   .fill(start);
```
* I need to map each element such that each element is incremented by the index, so if I have a range of 1-3 => `[1+0, 1+1, 1+2]`
* I can achieve this via the `map()` method:
```js
const range = (start, end) => Array(end - start + 1)
   .fill(start)
   .map((element, index) => element + index);
```

### Creating Character Range Function
* I also need a function which will create a range of characters, e.g. `a-c` => `[a,b,c]`
* 