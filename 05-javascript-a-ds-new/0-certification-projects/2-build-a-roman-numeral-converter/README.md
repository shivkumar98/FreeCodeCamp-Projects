# 🚧 2 Build a Roman Numeral Converter Project

## 🎬 Demo 🎬
* You can test out my application which I built for this project [here](https://htmlpreview.github.io/?https://github.com/shivkumar98/FreeCodeCamp-Projects/blob/main/05-javascript-a-ds-new/0-certification-projects/2-build-a-roman-numeral-converter/code/index.html)
* The code I wrote for this can be found [here](./code/)

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

* I add the Convert button:
    ```js
    <main>
        <h2>Enter a Number</h2>
        <input id="number" type="number">
        <br>
        <button id="convert-btn">Convert</button>
    </main>
    ```
* I style it with CSS:
    ```css
    #convert-btn {
        width: 85%;
        font-size: 18pt;
        background: linear-gradient(#fecc4c, #ffac33);
        margin-top: 20pt;
        border: 1px solid #fecc4c;
        padding: 12px 0;
    }
    ```
* This is what it looks like:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-27-17-49-10.png" height="200px">
    </details>

### ⭐ Handling Empty Number Input ⭐
* I add an `#output` div which has a CSS class of hide:
    ```html
    <div class="centred">
        <img src="fcc_primary.svg" height="30pt">
        <h1>ROMAN <br>NUMERAL<br> CONVERTER</h1>
        <main>
            <h2>Enter a Number</h2>
            <input id="number" type="number">
            <br>
            <button id="convert-btn">Convert</button>
        </main>
        <div id="output" class="hide"></div>
    </div>
    ```
* I style it using: 
    ```css
    .hide {
        display: none;
    }
    #output {
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        height: 56pt;
        line-height: 56pt;
        margin-top: 20px;   
        justify-content: center;
    }
    .error {
        color: #850000;
        background-color: #ffadad;
        font-size: 24pt;
        border: 3px solid #850000;
    }
    ```
* I initialise my JavaScript file as:
    ```js
    const convertBtn = document.getElementById("convert-btn")
    const output = document.getElementById("output")

    convertBtn.addEventListener("click", ()=> {
        output.textContent = "Please enter a valid number";
        output.classList.remove("hide")
        output.classList.add("error")
    })
    ```
* Now, when I click the convert button, I will always see an error in the output div:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-28-16-06-49.png" height="200px">
    </details>

* I fix my script, so that the error is only shown when the number input is empty:
    ```js
    const number = document.getElementById("number")
    convertBtn.addEventListener("click", ()=> {
        if (number.value ==="") {
            output.textContent = "Please enter a valid number";
            output.classList.remove("hide")
            output.classList.add("error")
        }
    })
    ```
* Now the error will show if number is blank, and nothing is shown if there is a number in the field

### ⭐ Handling Negative Number Input ⭐
* As of now, nothing happens if a negative number is inputted
* I add another if block to my JavaScript:
    ```js
    convertBtn.addEventListener("click", ()=> {
        // EXISTING CODE HERE

        if (parseInt(number.value) <= 0) {
            output.textContent = "Please enter a number greater than or equal to 1";
            output.classList.remove("hide")
            output.classList.add("error")
        }
    })
    ```
* However the text bleeds outside of the div:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-30-12-30-23.png" height="200px">
    </details>

* I change the CSS, so that the height is not fixed to `56pt`, from
    ```css
    #output {
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        height: 56pt;
        line-height: 56pt;
        margin-top: 20px;   
        justify-content: center;
    }
    ```
* to:
    ```css
    #output {
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        min-width: 56pt;
        margin-top: 20px;   
        padding: 20px 0;
        justify-content: center;
        overflow-wrap: break-word;
    }
    ```
* Now when I enter `-1`, it looks like:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-30-12-38-55.png" height="200px">
    </details>
* And if I enter empty, it looks like:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-30-12-39-35.png" height="200px">
    </details>

* I now have 5 of the tests from freeCodeCamp passing:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-30-12-43-16.png" height="200px">
    </details>

### ⭐ Handling Too Large Number Input ⭐
* I also check if the input is greater than 3999:
    ```js
    convertBtn.addEventListener("click", ()=> {
        // EXISTING CODE HERE

        if (parseInt(number.value) > 3999) {
            output.textContent = "Please enter a number less than or equal to 3999";
            output.classList.remove("hide")
            output.classList.add("error")
        }
    })
    ```
* Now if enter a large number, I see this error message:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-30-13-03-12.png" height="200px">
    </details>

* Now the first 6 tests pass:
    <details>
    <summary>Screenshot</summary>

    <img src="screenshots/2024-12-30-13-04-07.png" height="200px">
    </details>

### ⭐ Converting 9 to Roman Numerals ⭐
* The seventh test is:

7. When the `#number` element contains the number 9 and the `#convert-btn` element is clicked, the `#output` element should contain the text `"IX"`.

* I initialise my `functions.js` file [here](./code/js/functions.js) as:
    ```js
    function decimalToRomanNumeral(input) {
        return "IX"
    }

    module.exports = { decimalToRomanNumeral}
    ```
* I intialise my `functions.test.js` file [here](./code/js/functions.test.js) as:
    ```js
    const { decimalToRomanNumeral } = require('./functions');

    test('should return IX when 9 is input', ()=> {
        expect(decimalToRomanNumeral(9)).toBe('IX')
    })
    ```
* I then open the terminal and enter:
```
npm init -y    
npm install --save-dev jest
```
* I then can run my tests by clicking on the test button in VSCode or using the terminal

* I update my function so that it uses recursion to convert numbers 1-10:
    ```js
    function decimalToRomanNumeral(input) {
        if (input === 0) {
            return "";
        } 
        if (input <=10) {
            if (input<=3) {
                return "I".repeat(input)
            } else if (input==4) {
                return "IV"
            } else if (input==5) {
                return "V"
            } else if (input >=6 && input <= 8) {
                return "V"+ decimalToRomanNumeral(input-5);
            } else if (input == 9) {
                return "IX"
            } else {
                return "X"
            }
        }
    }
    ```

### ⭐ Converting 16 to Roman Numerals ⭐
* I know the numbers 11-20 are just the same as 1-10 with "X" preppended
* I update my function:
    ```js
    function decimalToRomanNumeral(input) {
        if (input === 0) {
            return "";
        } 
        if (input <=10) {
            // EXISTING CODE HERE
        } else if (input >=11 && input <=20) {
            return "X" + decimalToRomanNumeral(input-10)
        }
    }
    ```

### ⭐ Converting 21-39 to Roman Numerals ⭐
* The numbers 21-30, is the same as as numbers 11-20, but with X preappended to it
* So I update my function to:
```js
function decimalToRomanNumeral(input) {
    if (input === 0) {
        return "";
    } 
    if (input <=10) {
        // EXISTING CODE HERE
    } else if (input >=11 && input <=20) {
        return "X" + decimalToRomanNumeral(input-10)
    } else if (input >=21 && input <=30) {
        return "XX"+ decimalToRomanNumeral(input-20)
    }
}
```
* I notice there is a pattern here, so I decide to refactor. 
* I notice I need to make my code and conditions consistent, so I first make the following refactoring:
    ```js
    function decimalToRomanNumeral(input) {
        if (input === 0) {
            return "";
        } 
        if (input <=9) {
            if (input<=3) {
                return "I".repeat(input)
            } else if (input==4) {
                return "IV"
            } else if (input==5) {
                return "V"
            } else if (input >=6 && input <= 8) {
                return "V"+ decimalToRomanNumeral(input-5);
            } else {
                return "IX"
            } 
        } else if (input >=10 && input <=19) {
            return "X" + decimalToRomanNumeral(input-10)
        } else if (input >=20 && input <=29) {
            return "XX"+ decimalToRomanNumeral(input-20)
        }
    }
    ```
* Now that I can do some real refactoring; I squash the last to else-if conditions:
    ```js
    function decimalToRomanNumeral(input) {
        if (input === 0) {
            return "";
        } 
        if (input <=9) {
            // EXISTING CODE HERE
        } else if (input >=10 && input <=29) {
            let numberOfTens = Math.floor(input/10 % 10)
            return "X".repeat(numberOfTens) + decimalToRomanNumeral(input-(10*numberOfTens))
        }
    }
    ```

* The code I have also works for numbers 30-39, so I expand the else condition:
    ```js
    else if (input >=10 && input <=39) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "X".repeat(numberOfTens) + decimalToRomanNumeral(input-(10*numberOfTens))
    }
    ```
### ⭐ Converting 40-49 to Roman Numerals ⭐
* These numbers are just "XL" Pre-appended to the number, I update my function to:
    ```js
    else if (input >=40 && input <=49) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "XL" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```


### ⭐ Converting 50-59 to Roman Numerals ⭐
* These numbers have "L" pre-appended to it:
    ```js
    else if (input >=50 && input <=59) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "L" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```
### ⭐ Converting 60-69 to Roman Numerals ⭐
* The numbers 60 to 69 are just "LX" pre-appended to `decimalToRomanNumeral(input-60)`:
    ```js
    else if (input >=60 && input <=69) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LXI" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```
### ⭐ Converting 70-79 to Roman Numerals ⭐
* The numbers 70 to 79 are just "LXX" pre-appended to `decimalToRomanNumeral(input-70)`:
    ```js
    else if (input >=70 && input <=79) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LXX" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```

### ⭐ Converting 80-89 to Roman Numerals ⭐
* The numbers 80 to 89 are just "LXXX" pre-appended to `decimalToRomanNumeral(input-80)`:
    ```js
    else if (input >=80 && input <=89) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LXXX" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```

### ⭐ Converting 90-99 to Roman Numerals ⭐
* The numbers 90 to 99 are just "XC" pre-appended to `decimalToRomanNumeral(input-90)`:
    ```js
    else if (input >=90 && input <=99) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "XC" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```
### ⭐ Refactoring decimalToRomanNumeral ⭐

* There is a clear pattern for when the input is between 50 and 89, the roman numeral representation is `"L" + "X"*(tens digit of (input-50)) + decimalToRomanNumeral(input-(10*numberOfTens))`
* I refactor my function from:
    ```js
    else if (input >=50 && input <=59) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "L" + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=60 && input <=69) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LX" + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=70 && input <=79) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LXX" + decimalToRomanNumeral(input-(10*numberOfTens));
    } else if (input >=80 && input <=89) {
        let numberOfTens = Math.floor(input/10 % 10)
        return "LXXX" + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```
* To:
    ```js
    else if (input >=50 && input <=89) {
        let numberOfTens = Math.floor(input/10 % 10)
        let numberOfTensAbove50 = Math.floor((input-50)/10 % 10)
        return "L" +"X".repeat(numberOfTensAbove50) + decimalToRomanNumeral(input-(10*numberOfTens));
    }
    ```

### ⭐ Converting 100-199 to Roman Numerals ⭐

* The numbers 100-199 are just "C" pre-appended to decimalToRomanNumeral(input-100):
    ```js
    else if (input >=100 && input<=199) {
        return "C" + decimalToRomanNumeral(input-100);
    }
    ```

### ⭐ Converting 200-399 to Roman Numerals ⭐
* Here is the else-if blocks for 200-399:
```js
else if (input >=200 && input<=299) {
    return "CC" + decimalToRomanNumeral(input-200);
} else if (input >=300 && input<=399) {
    return "CCC" + decimalToRomanNumeral(input-300);
}
```
* Clearly there is a pattern where "C" is repeated by the hundredths digit of input, and `decimalToRomanNumeral(input - (100 * hundredths digit)` is appended to it
* So I refactor this to:
    ```js
    else if (input >=100 && input<=399) {
        let numberOfHundreds = Math.floor(input/100 % 100)
        return "C".repeat(numberOfHundreds) + decimalToRomanNumeral(input-(100*numberOfHundreds));
    }
    ```
### ⭐ Converting 400-999 to Roman Numerals ⭐
* I convert the numbers up to 999 with these else-if blocks:
```js
else if (input >=100 && input<=399) {
    let numberOfHundreds = Math.floor(input/100 % 100)
    return "C".repeat(numberOfHundreds) + decimalToRomanNumeral(input-(100*numberOfHundreds));
} else if (input >=400 && input <=499) {
    return "CD" + decimalToRomanNumeral(input - 400)
} else if (input >=500 && input <=899) {
    let numberOfHundredsAbove500 = Math.floor((input-500)/100 % 100)
    return "D"+ "C".repeat(numberOfHundredsAbove500) + decimalToRomanNumeral(input-(100*numberOfHundredsAbove500)-500)
} else if (input >=900 && input <=999) {
    return "CM"+decimalToRomanNumeral(input-900)
}
```

### ⭐ Converting 1000-1999 to Roman Numerals ⭐
* I convert numbers up to 1999 with these else-if blocks:
    ```js
    else if (input >=1000 && input <=1399) {
        let numberOfHundredsAbove1000 = Math.floor((input-1000)/100 % 100)
        return "M"+"C".repeat(numberOfHundredsAbove1000)+decimalToRomanNumeral(input-1000-(100*numberOfHundredsAbove1000));
    } else if (input >=1400 && input <=1499) {
        return "MCD" + decimalToRomanNumeral(input-1400);
    } else if (input >=1500 && input <=1899) {
        let numberOfHundredsAbove1500 = Math.floor((input-1500)/100 % 100)
        return "MD"+"C".repeat(numberOfHundredsAbove1500)+decimalToRomanNumeral(input-1500-(100*numberOfHundredsAbove1500));
    } else if (input >=1900 && input <=1999) {
        return "MCM"+decimalToRomanNumeral(input-1900);
    }
    ```
    
### ⭐ Converting 2000-3999 to Roman Numerals ⭐
* I convert numbers up to 3999 with this else-if blocks:
    ```js
    else if (input >=2000 && input <=3999) {
        let numberOfThousandths = Math.floor(input/1000 % 1000)
        return "M".repeat(numberOfThousandths)+decimalToRomanNumeral(input-(1000*numberOfThousandths));
    }
    ```

### ⭐ Utilising decimalToRomanNumeral() Function ⭐
* I now have a function which is tested that convert an integer to a Roman numeral represented string:
    <details>

    <summary>decimalToRomanNumeral(input)</summary>

    ```js
    function decimalToRomanNumeral(input) {
        if (input === 0) {
            return "";
        } 
        if (input <=9) {
            if (input<=3) {
                return "I".repeat(input)
            } else if (input==4) {
                return "IV"
            } else if (input==5) {
                return "V"
            } else if (input >=6 && input <= 8) {
                return "V"+ decimalToRomanNumeral(input-5);
            } else {
                return "IX"
            } 
        } else if (input >=10 && input <=39) {
            let numberOfTens = Math.floor(input/10 % 10)
            return "X".repeat(numberOfTens) + decimalToRomanNumeral(input-(10*numberOfTens))
        } else if (input >=40 && input <=49) {
            let numberOfTens = Math.floor(input/10 % 10)
            return "XL" + decimalToRomanNumeral(input-(10*numberOfTens));
        } else if (input >=50 && input <=89) {
            let numberOfTens = Math.floor(input/10 % 10)
            let numberOfTensAbove50 = Math.floor((input-50)/10 % 10)
            return "L" +"X".repeat(numberOfTensAbove50) + decimalToRomanNumeral(input-(10*numberOfTens));
        } else if (input >=90 && input <=99) {
            let numberOfTens = Math.floor(input/10 % 10)
            return "XC" + decimalToRomanNumeral(input-(10*numberOfTens));
        } else if (input >=100 && input<=399) {
            let numberOfHundreds = Math.floor(input/100 % 100)
            return "C".repeat(numberOfHundreds) + decimalToRomanNumeral(input-(100*numberOfHundreds));
        } else if (input >=400 && input <=499) {
            return "CD" + decimalToRomanNumeral(input - 400)
        } else if (input >=500 && input <=899) {
            let numberOfHundredsAbove500 = Math.floor((input-500)/100 % 100)
            return "D"+ "C".repeat(numberOfHundredsAbove500) + decimalToRomanNumeral(input-(100*numberOfHundredsAbove500)-500)
        } else if (input >=900 && input <=999) {
            return "CM"+decimalToRomanNumeral(input-900)
        } else if (input >=1000 && input <=1399) {
            let numberOfHundredsAbove1000 = Math.floor((input-1000)/100 % 100)
            return "M"+"C".repeat(numberOfHundredsAbove1000)+decimalToRomanNumeral(input-1000-(100*numberOfHundredsAbove1000));
        } else if (input >=1400 && input <=1499) {
            return "MCD" + decimalToRomanNumeral(input-1400);
        } else if (input >=1500 && input <=1899) {
            let numberOfHundredsAbove1500 = Math.floor((input-1500)/100 % 100)
            return "MD"+"C".repeat(numberOfHundredsAbove1500)+decimalToRomanNumeral(input-1500-(100*numberOfHundredsAbove1500));
        } else if (input >=1900 && input <=1999) {
            return "MCM"+decimalToRomanNumeral(input-1900);
        } else if (input >=2000 && input <=3999) {
            let numberOfThousandths = Math.floor(input/1000 % 1000)
            return "M".repeat(numberOfThousandths)+decimalToRomanNumeral(input-(1000*numberOfThousandths));
        }
    }
    ```

    </details>

* At the bottom of the event listener, I add the following code:
    ```js

    convertBtn.addEventListener("click", ()=> {
        // existing code

        let romanNumeralOfInput = decimalToRomanNumeral(number.value);
        output.textContent = romanNumeralOfInput;
        output.classList.remove("hide")
        output.classList.add("result")
        return;
    })
    ```
* I get few test failures (from freeCodeCamp). I realised I didn't add returns in my if checks for when user input is not valid
* I correct my function, so that there is early returns:
    ```js
    convertBtn.addEventListener("click", ()=> {
        if (number.value ==="") {
            output.textContent = "Please enter a valid number";
            output.classList.remove("hide")
            output.classList.add("error")
            return;
        }

        if (parseInt(number.value) <= 0) {
            output.textContent = "Please enter a number greater than or equal to 1";
            output.classList.remove("hide")
            output.classList.add("error")
            return;
        }

        if (parseInt(number.value) > 3999) {
            output.textContent = "Please enter a number less than or equal to 3999";
            output.classList.remove("hide")
            output.classList.add("error")
            return;
        }

        let romanNumeralOfInput = decimalToRomanNumeral(number.value);
        output.textContent = romanNumeralOfInput;
        output.classList.remove("hide")
        output.classList.add("result")
        return;
    })
    ```

* I also create a new CSS class for the result:
    ```css
    .result {
        color: white;
        background-color: #3b3d4f;
        font-size: 24pt;
        border: 3px solid white;
    }
    ```
* Now all my tests pass!