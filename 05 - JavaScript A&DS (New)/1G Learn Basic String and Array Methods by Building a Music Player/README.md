<!-- omit in toc -->
# 🧠 1G Learn Basic String and Array ?Methods by Building a Music Player
* In this exercise I will learn essential string and array methods like `find()`, `forEach()`, `map()` and `join()`
* I will code a basic MP3 player using HTML/CSS/JavaScript 
* I will implement the following features:
   - Handling audio playback
   - Managing playlist
   - Pause, Play, Next, Previous, and Shuffle
   - Dynamically update the UI based on current song
* Here is a preview of what I will build:

<img src="screenshots/2024-07-31-08-19-59.png" width="300px">

<!-- omit in toc -->
## 👨‍🍳 Final Product 👨‍🍳

* You can test the app [here]()

* Here is a demo:


<!-- omit in toc -->
## 📜 Table of Contents 📜


## 🟥 Project Setup
* The [HTML](project-setup/index.html) and [CSS](project-setup/styles.css) files have been provided to me
* The website currently looks like this and has no functionality:
![](screenshots/2024-08-02-07-38-18.png)

## 🟥 Initialising Variables
* I create my javascript and initialise some variables   
```js
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
```

## 🟥 Creating Array for Songs

* I create an array to store all the songs
```js
let allSongs = [];
```
* I add 10 songs as objects to this array
```js
const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];
```

## 🟥 Web Audio API
* All modern web browsers support Web Audio API which enables you to generate and process audio in webb applications
* I initialise an `Audio` class instance which creates a HTML5 `audio` element:
```js
const audio = new Audio()
```

* The music player should keep track of the songs, the current song playing, and the time of the current song. I create a `userData` variable to hold this information
```js
let userData = {};
```

## 🟥 Spread Operator (...)
* In order for me to remove a song, or shuffle songs in my playlist, I need to take a copy of `allSongs` without mutating it
* The `...` spread operator can help me achieve this, its used to copy one array into another. E.g. suppose I have two arrays `arr1` and `arr2`, then I can merge as so:
```js
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]
```
* Using this, I copy `allSongs` to a songs property of userData:
```js
let userData = {
   songs: [...allSongs]
}
```
* To track the current song's info and playback time, I initialise `currentSong` and `songCurrentTime` properties:
```js
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0
};
```

## 🟥 Arrow Functions
* In the previous projects, I used regular functions (and anonymous functions), now I will be using `arrow functions`
* Arrow functions are ANONYMOUS functions
* E.g. you can declare an arrow function as:
```js
() => {console.log("hello")}
```
* This will NOT print anything unless I call it
* You can call an anonymous function using a variable:
```js
let arrowFunction = () => { console.log("hello"); }
arrowFunction(); // hello
```
* Or you can call it directly:
```js
(
   () => { console.log("hello"); }
)(); // hello
```

* I create an arrow function called `printGreeting`:
```js
const printGreeting = () => {
  console.log("Hello there!")
}
printGreeting() // Hello there!
```

* I create a new function called printMessage which prints a parameter:
```js
const printMessage = (org) => {
  console.log(`${org} is awesome!`)
}
printMessage("freeCodeCamp"); 
// freeCodeCamp is awesome!
```

* You can also return a value from arrow function
```js
const addTwoNumbers  = (num1,num2) => {
  return num1+num2;
}
console.log(addTwoNumbers(3, 4))  // 7
```

* Like Java lambdas, you can omit the curly braces and `return` keyword if the result can expressed as a single line:
```js
const addTwoNumbers = (num1, num2) => num1+num2
```

<hr>

## 🟥 Array Map Function


* The `map()` function takes a function as a parameter - AKA a **callback function**:
```js
let array = [1,2,3]
let doubledArray = array.map((number) => number*2) // [2,4,6]
```
* To display songs in UI, I need to create a function, I create a `renderSongs` function which takes an array parameter:
```js
const renderSongs = (array) => {
}
```
* I use the map function to create a `<li>` element with an id of `song-id` (with id being replaced with actual ID of song) and class `playlist-song`:
```js
const renderSongs = (array) => {
  const songsHTML = array.map((song) => {
    return `<li id="song-${song.id}" class="playlist-song"></li>`
  })
}
```
