const ageInput = prompt("Please enter your age:");
const age = Number(ageInput);

if (isNaN(age) || age < 0) {
  console.log("Please enter a valid age.");
} else if (age < 5) {
  console.log("You are a Toddler.");
} else if (age <= 12) {
  console.log("You are a Child.");
} else if (age <= 19) {
  console.log("You are a Teenager.");
} else if (age <= 35) {
  console.log("You are a Young Adult.");
} else if (age <= 60) {
  console.log("You are Middle-Aged.");
} else {
  console.log("You are a Senior.");
}

