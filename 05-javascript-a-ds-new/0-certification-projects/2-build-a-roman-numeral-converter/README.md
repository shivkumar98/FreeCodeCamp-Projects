# 🚧 1 Build a Roman Numeral Converter Project

* **Objective**: Build an app that is functionally similar to [https://roman-numeral-converter.freecodecamp.rocks](https://roman-numeral-converter.freecodecamp.rocks)

## 📜 Instructions 📜
* Roman numerals are based on seven symbols which can be combined to express Arabic numerals. E.g.:
  
| Roman numerals | Arabic numerals |
|----------------|-----------------|
|      M         |      1000       |
|      CM        |      900        |
|      D         |      500        |
|      CD        |      400        |
|      C         |      100        |
|      XC        |      90         |
|      L         |      50         |
|      XL        |      40         |
|      X         |      10         |
|      IX        |      9          |
|      V         |      5          |
|      IV        |      14         |
|      I         |      1          |

## 📖 User Stories 📖 
1. You should have an `input` element with an `id` of `"number"`
2. You should have a `button` element with an `id` of `"convert-btn"`
3. You should have a `div`, `span` or `p` element with an `id` of `output`
4. When you click on the `#convert-btn` element without entering a value into the `#number` element, the `#output` element should contain the text `"Please enter a valid number"`
5. When the `#number` element contains the number -1 and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number greater than or equal to 1"`
6. When the `#number` element contains the number 4000 or greater and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number less than or equal to 3999"`
7. When the `#number` element contains the number 9 and the `#convert-btn` element is clicked, the `#output` should contain the text `"IX"`.
8. When the `#number` element contains the number 16 and the `#convert-btn` element is clicked, the `#output` element should contain the text `"XVI"`
9. When the `#number` element contains the number 649 and the `#convert-btn` element is clicked, the `#output` element should contain the text `"DCXLIX"`
10. When the `#number` element contains the number 1023 and the `#convert-btn` element is clicked, the `#output` element should contain the text `"MXXIII"`
11. When the `#number` element contains the number 3999 and the `#convert-btn` element is clicked, the `#output` element should contain the text `"MMMCMXCIX"`

## ✏️ Project Commentary ✏️

### ⭐ Front-End Work ⭐
* I intialised the HTML as:
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta lang="en">
            <meta charset="UTF-8">
            <link rel="stylesheet" href="./styles.css">
            <title>Roman Numeral Converter</title>
        </head>
        <body>
            <div class="centred">
                <img src="fcc_primary.svg" height="30pt">
                <h1>ROMAN <br>NUMERAL<br> CONVERTER</h1>
            
            </div>
            <script src="./script.js"></script>
        </body>
    </html>
    ```
* And my CSS as:
    ```css
    body {
        background-color: #1b1b32;
        margin-top: 48px;
    }
    .centred {
        margin: auto;
        width: 500px;
        min-width: 400px;
        text-align: center;
    }

    .container {
        background-color: whitesmoke;
    }

    h1 { 
        font-family: 'Castoro Titling';
        color: white;
        font-size: 30pt;
        font-weight: lighter;
        line-height: 38pt;
    }
    ```
* This is what it looks like:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-27-11-53-51.png" width="200px">
    </details>
  

* I add a `main` element:
    ```html
    <div class="centred">
        <img src="fcc_primary.svg" height="30pt">
        <h1>ROMAN <br>NUMERAL<br> CONVERTER</h1>
        <main>
            <h2>Enter a Number</h2>
        </main>
    </div>
    ```
* And I give it the following styling:
    ```css
    main {
        border: 3px solid #f5f6f7;
        background-color: #3b3d4f;
        color: white;
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        padding-top: 18px;
    }
    ```

* In my `main` element, I add the following input:
    ```html
    <input id="number" type="number">
    ```
* With the following styling:
    ```css
    #number {
        width: 80%;
        height: 40pt;
        background-color: #0a0a23;
        font-size: 30pt;
        color:white;
        border: 1px solid white;
        padding: 4px 10px;
    }
    ```
* This is what it looks like:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-27-12-09-57.png" height="200px">
    </details>