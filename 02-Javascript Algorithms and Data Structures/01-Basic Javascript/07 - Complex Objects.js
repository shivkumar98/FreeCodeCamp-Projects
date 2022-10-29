 /* ------------------- Manipulating Complex Objects --------------------------*/

// A JavaScript object can contains any combination of arrays, values and objects themselves

/* Example 1:
Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
*/

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Eminem",
    "title": "The Real Slim Shady",
    "release_year": 1973,
    "formats": [
    "mp3", "streaming"
    ]
  }
];



/* ------------------- Manipulating Complex Objects --------------------------*/


/* ------------------ Accessing Nested Objects --------------------------*/

// we can access nested elements of an object using chained dot/brackets notation

/* Example 2:
Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
*/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"]




/* ------------------ Accessing Nested Objects --------------------------*/