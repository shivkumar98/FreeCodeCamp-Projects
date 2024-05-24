# 🧠 1C Building a RPG Game
* JavaScript is a core technology of web pages to make them interactive. In this exercise, I will build a Role Playing Game

## 👨‍🍳 Final Product 👨‍🍳

## 1 Setting up HTML

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
* The issue is that the JavaScript file is located in the `script` tag