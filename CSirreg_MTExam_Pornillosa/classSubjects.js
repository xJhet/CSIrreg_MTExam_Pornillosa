//Collecting the following user information with the use of prompt ():

const subjectTitle = prompt("Please enter the subject title:");
const classSchedule = prompt("Please enter the class schedule (Time, Days):");
const classroom = prompt("Please enter the classroom:");
const classInstructor = prompt("Please enter the class instructor:");
const studentName = prompt("Please enter your name:");

console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);
