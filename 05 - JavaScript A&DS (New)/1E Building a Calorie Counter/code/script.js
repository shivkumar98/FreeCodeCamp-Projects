const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

function cleanInputStrin(str) {
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
   const targetInputContainer = document
      .querySelector(`#{entryDropdown.value} .input-container`);
   const entryNumber = targetInputContainer.querySelectorAll();
   const HTMLString = `
   <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
   <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
   <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
   <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>`
}