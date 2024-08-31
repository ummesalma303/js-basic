/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const score = 90;

if (score < 100 && score >= 90) {
  console.log('A')
} else if (score >= 80 ) {
  console.log('B')
} else if (score >= 70) {
  console.log('c')
} else if (score >= 60) {
  console.log('D')
} else {
  console.log('F')
} 