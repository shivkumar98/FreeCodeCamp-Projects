# 🎓 3 Build a Telephone Number Validator 🎓

## 🎬 Demo 🎬
* You can test out my application which I built for this project [here](TODO)
* The code I wrote for this can be found [here](./code/)

* **Objective**: Build an app that is functionally similar to [https://telephone-number-validator.freecodecamp.rocks/](https://telephone-number-validator.freecodecamp.rocks/)

## 📜 Instructions 📜
* In the US, phone numbers can be formatted in many way; here are some examples:
```
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
5555555555
555-555-5555
(555)555-5555
```
* The area code (555) is required, if country code is provided it must be 1

## 📖 User Stories 📖 
1. You should have an `input` element with an `id` of `user-input`
2. You should have a `button` element with an `id` of `check-btn`
3. You should have a `button` element with an `id` of `clear-btn`
4. You should have a `div`, `span` or `p` elements with an `id` of `results-div`
5. When you click on `#check-btn` element without entering a value into the `#user-input` element, an alert should appear with the text `Please provide a phone number`
6. When you click on the `#clear-btn` element, the content within the `#results-div` should be removed
7. If the `#user-input` contains any of the following, and the `#results-div` element should contain `Valid US number: ` followed by the number in `#user-input`:
```
1 555-555-5555
1 (555) 555-5555
5555555555
555-555-5555
(555)555-5555
1(555)555-5555
```
8. If the `#user-input` contains any of the following, and the `#results-div` element should contain `Invalid US number: ` followed by the number in `#user-input`:
```
555-5555
5555555 
1 555)555-5555
1 555 555 5555
1 456 789 4444
123**&!!asdf#
55555555
(6054756961)
(6054756961)
2 (757) 622-7382
0 (757) 622-7382
-1 (757) 622-7382
2 757 622-7382
10 (757) 622-7382
27576227382
(275)76227382
2(757)6227382
2(757)622-7382
555)-555-5555
(555-555-5555
(555)5(55?)-5555
55 55-55-555-5
11 555-555-5555
```


## ✏️ Project Commentary ✏️

### ⭐ Front-End Work ⭐
* I completed the front end and styles, the results look like this:
![](2025-04-22-07-54-14.png)

### ⭐ Back-End Work ⭐
* I got the user story of showing an alert if the input is empty with the following code:
```js
const checkButton = document.getElementById("check-btn")
const userInput = document.getElementById("user-input")
checkButton.addEventListener("click", (e) => {
   if (userInput.value === "") 
      alert("Please provide a phone number")
})
```
* I get the user story of clearing the contents of `results-div` with the following code:
```js
clearButton.addEventListener("click", (e) => {
   results.innerHTML =  ""
})
```