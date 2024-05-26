# 🧠 1C Building a RPG Game
* JavaScript is a core technology of web pages to make them interactive. In this exercise, I will build a Role Playing Game

## 👨‍🍳 Final Product 👨‍🍳

## Setting up HTML

* I create the boiler point of my HTML file:
```html
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet.css">
    <title>RPG - Dragon Repeller</title>
  </head>
  <body>
    <div id="game">
    </div>
  </body>

</html>
```

* I add a script elemment to load my JavaScript into the HMTL file:
```html
    <head>
        <meta lang="en">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="styles.css">
        <title>RPG - Dragon Repeller</title>
        <script>
            console.log("Hello World");
        </script>
    </head>
```

* I specify an external js file in the script tag:
```html
<script src="./script.js">
</script>
```
* I add a variable called `xp`, `health` and `gold`
```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"]
```

* I set up the test and buttons in my HTML:
```html
<body>
    <div id="game">
        <div id="stats">
            <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
            <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
            <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
          </div>
          <div id="controls">
            <button id="button1">Go to store</button>
            <button id="button2">Go to cave</button>
            <button id="button3">Fight dragon</button>
          </div>
          <div id="monsterStats"></div>
          <div id="text"></div>
    </div>
</body>
```
![](screenshots/2024-05-24-08-25-17.png)

## DOM
* The DOM is a tree structure representation of the HTML which JavaScript can use to interact with the HTML
* The `document` object represents the entire HTML
* We can use `document.getQuerySelector()` to obtain an element using a CSS selector
* I try to obtain the button element by adding the following to my script.js:
```js
let button1 = document.querySelector("#button1");
console.log(button1);
```
* But when I run the code in the browser it logs `null`😱
* The issue is that the JavaScript file is located in the `script` tag, so the JavaScript loads before the browser has processed it!!!
* I rectify this issue by moving the script tag to just before the `</body>` tag:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta lang="en">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="styles.css">
        <title>RPG - Dragon Repeller</title>
    </head>
        
    </head>
    <body>

        <div id="game">
            <div id="stats">
                <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
                <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
                <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
              </div>
              <div id="controls">
                <button id="button1">Go to store</button>
                <button id="button2">Go to cave</button>
                <button id="button3">Fight dragon</button>
              </div>
              <div id="monsterStats"></div>
              <div id="text"></div>
        </div>
        <script src="./script.js"></script>
    </body>
</html>
```
* Now running the JavaScript I see the following in the console:
```html
<button id="button1">Go to store</button>
```
* I use const instead as I will not reassign this, and get the other two buttons:
```js
const  button1 = document.querySelector("#button1");
// console.log(button1); // logs: <button id="button1">Go to store</button>
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
```

* I add two spans for the monster's name and health in the `#monsterStats` div:
```html
<div id="monsterStats">
  <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
  <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
</div>
```
* I add some text to my `#text` div:
```html
<div id="text">Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
</div>
```
* My web page now looks like:

![](screenshots/2024-05-24-09-59-00.png)

## Styling
* I start adding styling to the css:
```css
body {
  background-color: #0a0a23;
}
#text {
  background-color: #0a0a23;
  color: #ffffff;
  padding: 10px;
}
```
* I give my #game windows to be centered horizontally:
```css
#game {
  max-width: 500px;
  max-height: 400px;
  background-color: #ffffff;
  color: #ffffff;
  margin: 30px auto 0px auto;
  padding: 10px;
}
```

* I give both my controls and stats divs borders and padding:
```css
#controls, #stats {
  border: 1px solid #0a0a23;
  color: #0a0a23;
  padding: 5px;
}
```
* I give the Monster stats a reddish background color, and hide it for now:
```css
#monsterStats {
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #ffffff;
  background-color: #c70d0d;
  display: none;
}
```
* I give the `.stat` classes some padding to the right:
```css
.stat {
  padding-right: 10px;
}
```
* I style the buttons so they have a vertical gradient, and a yellowish look:
```css
button {
  cursor: pointer;
  color: #0a0a23;
  background-color: #feac32;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
}
```
* The page now looks like:
![](screenshots/2024-05-24-16-37-19.png)

<hr>

## Using onclick Event

* I add constants for the other text elements:
```js
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
```
* I add the following functions:
```js
function goStore() {
  console.log("Going to store.");
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}
```

* `button1` is a button element (Go to store) - buttons have a `onclick` property
  - Properties can bbe accessed via **DOT NOTATION**
* I set the onclick property of button1 to the function `goStore`
```js
// initialising buttons:
button1.onclick = goStore;
```
* Clicking on the button in browser now logs `Going to store`💡
* Note: you cannot use `goStore()` on the RHS:
```js
button.onclick = goStore(); // ⚠️ does not work!!
```
* I now set button2 and button3:
```js
button2.onclick = goCave;
button3.onclick = fightDragon;
```

* Using the `querySelector()` method returns the entire HTML element, we can obtain the text by using the `innerText` property 💡
```js
const button1 = document.querySelector("#button1");
console.log(button1); // <button id="button1">
console.log(button1.innerText); // Go to store
```

* I update the `goStore()` function so it updates:
  - the text of button1 to "Buy 10 health (10 gold)"
  - the text of button2 to "Buy weapon (30 gold)"
  - the text of button3 to "Go to town square"
```js
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)"
  button3.innerText = "Go to town square"
}
```
* I also update the text of the #text div, and assign new functions on the button's onclick event:
```js
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)"
  button3.innerText = "Go to town square"
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText =  "You enter the store.";
}

function buyHealth() {}
function buyWeapon() {}
function goTown() {}
```

* Clicking on the `Go to store` button in browser:
![](screenshots/step-40.gif)

* I implement the goTown() function:
```js
function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}
```