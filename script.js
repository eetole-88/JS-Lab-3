"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },

  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },

  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },

  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  let passed = null;
  if (newScore >= 60) {
    passed = true;
  } else {
    passed = false;
  }
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: true,
  };

  array.push(newObject);
};

addSubmission(submissions, "Emilie", 70, "2021-06-01");

console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Emilie");
console.log(submissions);

//5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 0, 40);
console.log(submissions);

// 6
const findSubissionByName = (array, name) => {
  let found = array.find((item) => item.name === name);
  return found;
};
console.log(findSubissionByName(submissions, "Jack"));

//7
const findLowestScore = (array) => {
  let lowestCurrentScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestCurrentScore.score) {
      lowestCurrentScore = item;
    }
  });
  return lowestCurrentScore;
};
console.log(findLowestScore(submissions));

//8
const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));

//9
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed;
  });
};
console.log(filterPassing(submissions));

//10
const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
console.log(filter90AndAbove(submissions));
