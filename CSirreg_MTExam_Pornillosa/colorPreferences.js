const colors = []; // array to hold color names

for (let i = 0; i < 3; i++) { // loop 3 times
  const color = prompt(`Enter color #${i + 1} that you like:`);    // prompt user for color name
  colors.push(color);    // add color name to array
  console.log("Current colors list:", colors); // print current list of colors
}
