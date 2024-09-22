const character = "#";
const count = 8;
const rows = [];
for (let i=0; i<count;i=i+1) {
    rows.push(character);
}
let result = "";
// using for..of syntax:
for (const row of rows) {
    console.log(row);
}
