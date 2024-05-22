let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows.pop); // prints [Function: pop]
console.log(rows.pop());  // freeCodeCammp
console.log(rows); // [ 'Naomi', 'Quincy', 'CamperChan']
// rows.remove() // COMPILATION ERROR

// what does .push(T) return?
let pushed = rows.push("pushed");
console.log(pushed); // 4 - LENGTH OF ARRAY

console.log(rows.length) // 4