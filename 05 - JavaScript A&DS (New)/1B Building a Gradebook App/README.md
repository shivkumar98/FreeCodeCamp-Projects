# 🧠 1B Building a Gradebook App
* In this mini project, I will review fundamentals by building a gradebook app.


## Step 1:
* SCENARIO: A teacher has finished grading their students' tests and needs your help to calculate the average scores for their clas
* I am given the following code to implement:
```js
function getAverage(scores) {

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
```

* I implemment the function as:
```js
function getAverage(scores) {
    let sumOfScores = 0;
    for (const score of scores) {
        sumOfScores += score
    }
    let numberOfScores = scores.length;
    return sumOfScores / numberOfScores;
}
```