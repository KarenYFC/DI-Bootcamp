//Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

//const userInput = prompt("Please enter a number:");
//const dataType = typeof userInput;
//console.log(`The data type of the input is: ${dataType}`);

//While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?

let userInput = parseFloat(prompt("Please enter a number:"));

while (!isNaN(userInput)) {
    if (userInput >= 10) {
        break;
    }
    userInput = parseFloat(prompt("Please enter another number:"));
}

if (!isNaN(userInput)) {
    console.log(`You entered a valid number greater than or equal to 10: ${userInput}`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
