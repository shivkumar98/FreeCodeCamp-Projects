# 🧠 1B Building a Gradebook App
* In this mini project, I will review fundamentals by building a gradebook app.

## 👨‍🍳 Final Product 👨‍🍳
* The finished JavaScript file is defined below:
```js
function getAverage(scores) {
    let sumOfScores = 0;
    for (const score of scores) {
        sumOfScores += score
    }
    let numberOfScores = scores.length;
    return sumOfScores / numberOfScores;
}

function getGrade(score) {
    if (score >= 0 && score <=59) {
      return "F";
    } else if (score >= 60 && score <=69) {
      return "D";
    } else if (score >= 70 && score <=79) {
      return "C";
    } else if (score >= 80 && score <=89) {
      return "B";
    } else if (score >= 90 && score <=99) {
      return "A"
    } else {
      return "A++";
    }
}

function hasPassingGrade(score) {
    return score > 59;
}

function studentMsg(totalScores, studentScore) {
    let successMessage = hasPassingGrade(studentScore) ? "passed" : "failed";
    let result = "Class average: " + getAverage(totalScores) 
         + ". Your grade: " + getGrade(studentScore) + ". You " 
         + successMessage + " the course.";
    return result;
}
// test:
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// prints: Class average: 71.7. Your grade: F. You failed the course.

// test
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4
```

## 🟥 Step 1
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

## 🟥 Step 2
* Scenario: the teacher now wants to take a number score parameter and return a String representing the grade as:
| Score Range | Grade |
| 100         | "A++"   |
| 90 - 99     | "A"     |
| 80 - 89     | "B"     |
| 70 - 79     | "C"     |
| 60 - 69     | "D"     |
| 0 - 59      | "F"`    |

* I am given the following code:
```js
function getGrade(score) {

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
```

* I implement the function as:
```js
function getGrade(score) {
  if (score >= 0 && score <=59) {
    return "F";
  } else if (score >= 60 && score <=69) {
    return "D";
  } else if (score >= 70 && score <=79) {
    return "C";
  } else if (score >= 80 && score <=89) {
    return "B";
  } else if (score >= 90 && score <=99) {
    return "A"
  } else {
    return "A++";
  }
}
```


## 🟥 Step 3
* Scenario: the teacher now wants to easily check if a student has passed, i.e. has a grade which is not a F
* I need to complete thhe below code:
```js
function hasPassingGrade(score) {
  
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
```

* I implemment the code as
```js
function hasPassingGrade(score) {
    return score > 59;
}
```

## 🟥 Step 4
* Scenario: the teacher now wants to print a mmessage with thhe results
* If a student passed the course, the string should be like:
`Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.`
* If a student has failed the course, the string should be like:
`Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.`
* I have been given the following code to implement:
```js
function studentMsg(totalScores, studentScore) {

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
```
* I implement the function as:
```js
function studentMsg(totalScores, studentScore) {
    let successMessage = hasPassingGrade(studentScore) ? "passed" : "failed";
    let result = "Class average: " + getAverage(totalScores) 
         + ". Your grade: " + getGrade(studentScore) + ". You " 
         + successMessage + " the course.";
    return result;
}
// test:
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// prints: Class average: 71.7. Your grade: F. You failed the course.
```