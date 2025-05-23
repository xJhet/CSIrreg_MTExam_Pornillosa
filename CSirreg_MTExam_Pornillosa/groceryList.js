const createList = prompt("Do you want to create a grocery list? (y/n):"); // Ask the user if they want to create a grocery list

if (createList.toLowerCase() === 'y') { // Convert the user's input to lowercase for case-insensitive comparison
  const itemCountInput = prompt("How many items do you want to add to the grocery list?");
  const itemCount = Number(itemCountInput);
  
  if (isNaN(itemCount) || itemCount <= 0) { // Check if the user's input is a valid number
    alert("Please enter a valid positive number for the number of items.");
  } else { // If the user's input is valid, create the list
    const groceryList = [];
    for (let i = 0; i < itemCount; i++) {
      const item = prompt(`Enter item #${i + 1}:`);
      groceryList.push(item);
    }

    // Make copies for sorting and reversing to keep original safe
    const groceryListSort = [...groceryList].sort();
    const groceryListReverse = [...groceryList].reverse();

    alert(`Your grocery list: \n${groceryList.join(", ")}`); // Display the list to the user
    alert(`Sorted grocery list: \n${groceryListSort.join(", ")}`); // Display the sorted list to the user
    alert(`Reversed grocery list: \n${groceryListReverse.join(", ")}`); // Display the reversed list to the user
  }
} else {
  alert("No grocery list created.");      // If the user doesn't want to create a list, a message will display
}
