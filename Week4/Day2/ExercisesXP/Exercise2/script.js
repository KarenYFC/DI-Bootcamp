//John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

//Create a function named calculateTip() that takes no parameter.

//Inside the function, use prompt to ask John for the amount of the bill.

//Here are the rules
//If the bill is less than $50, tip 20%.
//If the bill is between $50 and $200, tip 15%.
//If the bill is more than $200, tip 10%.

//Console.log the tip amount and the final bill (bill + tip).

//Call the calculateTip() function.

function calculateTip() {
    const billAmount = parseFloat(prompt("Enter the amount of the bill:"));

    let tipPercentage;
    if (billAmount < 50) {
        tipPercentage = 0.20;
    } else if (billAmount >= 50 && billAmount <= 200) {
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.10;
    }

    const tipAmount = billAmount * tipPercentage;

    const finalBill = billAmount + tipAmount;

    console.log(`Tip amount: $${tipAmount.toFixed(2)}`);
    console.log(`Final bill (including tip): $${finalBill.toFixed(2)}`);
}

calculateTip();
