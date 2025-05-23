const favoriteNumber = 2;

let guess; // Declare variable
while (true) { 
  const input = prompt("Guess the favorite number:");
  guess = Number(input);

  if (isNaN(guess)) {  // Check if the input is not a number
    console.log("Please enter a valid number.");
    continue;
  }

  if (guess > favoriteNumber) { // Check if the guess is higher than the favorite number
    console.log("Too high!");
  } else if (guess < favoriteNumber) { // Check if the guess is lower than the favorite number
    console.log("Too low!");
  } else { // If the guess is equal to the favoriteNumber
    console.log("Correct! You guessed the favorite number.");
    break;
  }
}
