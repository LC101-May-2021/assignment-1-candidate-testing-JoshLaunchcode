const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let passOrFail = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  return input.question("What is your name, Candidate? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = String(input.question(questions[i]));
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = 0;
  // for (let i = 0; i < questions.length; i++){
  //   answers += `Question: ${questions[i]} || Answer: ${candidateAnswers[i]}\n`;
  // }
  // console.log(answers);

  for (let i = 0; i < questions.length; i++){
    if(correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
      grade++;
    }
  }

  grade = (grade / questions.length) * 100;
  
  if(grade <= 80) {
    passOrFail = "FAILED";
  } else {
    passOrFail = "PASSED";
  }

  return grade
}

function runProgram() {
  candidateName = askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello ${candidateName}. Best of luck on the Candidate Quiz!`)
  askQuestion();
  console.log(buildOutput(gradeQuiz(this.candidateAnswers)));

}

function buildOutput(grade){
  let output = "";

  output += `Candidate Name: ${candidateName} \n`;

  for (let j = 0; j < questions.length; j++) {
    output += `${j+1}) ${questions[j]} \nYour Answer: ${candidateAnswers[j]} \nCorrect Answer: ${correctAnswers[j]} \n \n`;
  }

  output += `>>> Overall Grade: ${grade} (${(grade * questions.length) / 100} of ${questions.length} responses correct) <<< \n>>> Status: ${passOrFail} <<<`;

  return output
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};