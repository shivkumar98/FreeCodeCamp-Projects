# 🧠 3C - Learn Basic Algorithmic Thinking by Building a Spam Number Sorter
* In this project, I'll expand my JS skills by getting comfortable with methods like `map()`, `reduce()`, and `filter()`
* I will practice method chaining and DOM manipulation by performing statistical calculations like mean, median, mode, variance, and standard deviation
* Here is a preview of what I will build:
   <details>

   <img src="screenshots/2025-03-06-07-22-54.png" width="400px">
   </details>

## 👨‍🍳 Final Product TODOOOOOOOOO👨‍🍳
* You can try out the application I built in this tutorial via this [link](TODOOOOOOO)

## 📝 Summary Notes TODOOOOOOOOOOOOOO 📝
* The value obtained from an input element is ALWAYS a string 💡
* There is a `isNaN()` method which enables you to check if a number is not a number:
   ```js
   isNaN(Number("not a number")) // false
   ```
* The `.reduce()` method takes an array and applies a callback method to condense into a single value, it's second parameter is used to initialise the value and should be set to avoid incorrect values from being generated 💡

## 🛠️ Project Setup 🛠️

* I have been provided the [HTML](code/index.html) and [CSS](code/styles.css)

## 🟥 Obtaining Numbers from Input
* I initialise my [JavaScript file](code/script.js) by declaring a `calculate` function:
   ```js
   const calculate = () => {

   }
   ```
* I need to obtain the values in the `id=numbers` input field, instead of using conventional document.findById(), I use the querySelector and  obtain it's `value` property:
```js
const calculate = () => {
  const value = document.querySelector("#numbers").value    
}
```
* I use this variable to obtain an array of the numbers, I use regex to split based on whitespace and a comma:
```js
const value = document.querySelector("#numbers").value    
const array = value.split(/,\s*/g)
```
* The value from an input element is ALWAYS a string 💡
* So I convert my array to numbers:
```js
const value = document.querySelector("#numbers").value;
const array = value.split(/,\s*/g);
const numbers = array.map(el => Number(el));
```
* Since the user can enter any string, the number array may contain `NaN` - I filter these out:
```js
const value = document.querySelector("#numbers").value;
const array = value.split(/,\s*/g);
const numbers = array.map(el => Number(el));
const filtered = numbers.filter(el => !isNaN(el));
```
* I chain the above filtering to the mapping, and my `calculate()` function is complete:
```js
const calculate = () => {
   const value = document.querySelector("#numbers").value;
   const array = value.split(/,\s*/g);
   const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
}
```

## 🟥 Calculating Mean
* I will calculate the mean of an array of numbers by using the `.reduce()` method
* The `.reduce()` method takes an array and applies a callback method to condense into a single value, it's second parameter is used to initialise the value and should be set to avoid incorrect values from being generated 💡
* I declare a getMean function:
```js
const getMean = (array) => 
   array.reduce((acc, el) => acc + el, 0) / array.length;
```
* I use the above function in my `calculate()` function, so I can display to DOM:
```js
const calculate = () => {
   // EXISTING CODE
   const mean = getMean(numbers);
   document.querySelector("#mean").textContent = mean
}
```
