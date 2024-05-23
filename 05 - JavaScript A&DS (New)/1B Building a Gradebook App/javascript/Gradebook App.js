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

