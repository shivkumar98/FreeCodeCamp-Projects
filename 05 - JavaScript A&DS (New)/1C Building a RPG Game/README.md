# 🧠 1C Building a RPG Game
* JavaScript is a core technology of web pages to make them interactive. In this exercise, I will build a Role Playing Game

## 👨‍🍳 Final Product 👨‍🍳

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