const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

function cleanInputString(str) {
   const regex = /[+-\s]/g;
   return str.replace(regex, "");
}

// console.log(cleanInputString("+-99")); // 99

function isInvalidInput(str) {
   const regex = /\d+e\d+/i;
   return str.match(regex);
}

// console.log(isInvalidInput("1e3")); // Array [ "1e3" ]
// console.log(isInvalidInput("10")); // null


function addEntry() {
   const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
   const entryNumber = targetInputContainer
      .querySelectorAll('input[type="text"]').length+1;
   const HTMLString = `
   <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
   <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
   <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
   <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>`;
   targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories)
clearButton.addEventListener('click', clearForm);

function calculateCalories(e) {
   e.preventDefault();
   isError = false;

   const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
   const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
   const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
   const snackNumberInputs = document.querySelectorAll('#snacks inpute[type=number]');
   const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
   const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
   const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
   const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
   const snacksCalories = getCaloriesFromInputs(snackNumberInputs);
   const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
   const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

   if (isError) {
      return;
   }

   const consumedCalories = breakfastCalories + lunchCalories 
         + dinnerCalories + snacksCalories;
   const remainingCalories = budgetCalories - consumedCalories
         + exerciseCalories;
         const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

         output.innerHTML = `
         <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
         <hr>
         <p>${budgetCalories} Calories Budgeted</p>
         <hr>
         <p>${budgetCalories} Calories Budgeted</p>
         <p>${consumedCalories} Calories Consumed</p>
         <p>${exerciseCalories} Calories Burned</p>
         `;
         output.classList.remove('hide');
   }

function getCaloriesFromInputs(list) {
   let calories = 0;
   for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);

      if (invalidInputMatch) {
         alert(`Invalid Input : ${invalidInputMatch[0]}`);
         isError = true;
         return null;
      }
      calories += Number(currVal);
   }
   return calories;
}

function clearForm() {
   const inputContainers = Array.from(
      document.querySelectorAll('.input-container'));
   for (let container of inputContainers) {
      container.innerHTML = '';
   }
   budgetNumberInput.value = '';
   output.innerText = '';
   output.classList.add('hide');
}