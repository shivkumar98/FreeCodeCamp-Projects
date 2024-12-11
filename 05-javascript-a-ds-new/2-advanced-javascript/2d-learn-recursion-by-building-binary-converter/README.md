# 🧠 2D - Learn Recusrsion by Building a Decimal to Binary Converter
* In this project, I will learn about recursion by building an app. I will also learn about the Stack data stucture, and build a visual representation of recursion using an animation

* Here is a preview of what I will build:
   <details>

   <img src="screenshots/preview.gif" width="400px">
   </details>


## 👨‍🍳 Final Product TODO 👨‍🍳
## 📝 Summary Notes TODO 📝

## 🛠️ Project Setup 🛠️

* I have been provided the [HTML](code/index.html) and [CSS](code/styles.css)
* This is what the page looks like:
   <details>

   <img src="screenshots/project-setup.png" width="400px">
   </details>

## 🟥 Without Recursion
* I set up the following constants:
   ```js
   const numberInput = document.getElementById("number-input")
   const convertBtn = document.getElementById("convert-btn")
   const result = document.getElementById("result")
   ```
* I create a function which will execute when user clicks the Convert button, for now I will print what is in the input field:

   ```js
   const checkUserInput = () => {
      console.log(numberInput.value)
   }

   convertBtn.addEventListener("click", checkUserInput);
   ```
* I also want to trigger the `checkUserInput()` whenever the user presses enter
* I use the ⌨️`keydown`⌨️ event which lets me check what key the user has pressed:
   ```js
   numberInput.addEventListener("keydown", (e)=>{})
   ```
* I can determine key the user has pressed❗If I print the `e` parameter in the console, I would see: `{ isTrusted: [Getter] }`. I can obtain the key using the `e.key` property
* I check that the key is "enter":
   ```js
   numberInput.addEventListener("keydown", (e)=>{
      if (e.key === "Enter") {
         checkUserInput()
      }
   })
   ```