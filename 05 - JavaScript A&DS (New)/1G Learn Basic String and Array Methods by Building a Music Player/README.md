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

## 🟥 Step 1
* I create my javascript and initialise some variables   
```js
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
```

* I create an array to store all the songs
```js
let allSongs = [];
```
* I create an object within this array:
```js
const allSongs = [
   {
      id: 0,
      title: "Scratching The Surface",
      artist: "Quincy Larson",
      duration: "4:25",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3"
   }
]
```
* I add another object to allSongs:
```js
{
   id: 1,
   title: "Can't Stay Down",
   artist: "Quincy Larson",
   duration: "4:15",
   src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
}
```
* I add another obbject:
```js
{
   id: 2,
   title: "Still Learning",
   artist: "Quincy Larson",
   duration: "3:51",
   src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3"
}
```