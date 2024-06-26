//Create an array called colors where the value is a list of your five favorite colors.
const colors = ["blue", "green", "red", "purple", "yellow"];
console.log(colors);

//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus
const suffixes = ["st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
    const suffix = i < suffixes.length ? suffixes[i] : "th";
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}