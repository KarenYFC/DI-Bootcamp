//Let’s create functions that calculate your vacation’s costs:

//Define a function called hotelCost().
//It should ask the user for the number of nights they would like to stay in the hotel.
//If the user doesn’t answer or if the answer is not a number, ask again.
//The hotel costs $140 per night. The function should return the total price of the hotel.

//Define a function called planeRideCost().
//It should ask the user for their destination.
//If the user doesn’t answer or if the answer is not a string, ask again.
//The function should return a different price depending on the location.
//“London”: 183$
//“Paris” : 220$
//All other destination : 300$

//Define a function called rentalCarCost().
//It should ask the user for the number of days they would like to rent the car.
//If the user doesn’t answer or if the answer is not a number, ask again.
//Calculate the cost to rent the car. The car costs $40 everyday.
//If the user rents a car for more than 10 days, they get a 5% discount.
//The function should return the total price of the car rental.

//Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

//Call the function totalVacationCost()

//Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


function hotelCost() {
    while (true) {
        const nights = parseInt(prompt("Enter the number of nights you would like to stay in the hotel:"));
        if (!isNaN(nights) && nights > 0) {
            return nights * 140;
        } else {
            console.log("Please enter a valid positive number of nights.");
        }
    }
}

function planeRideCost() {
    while (true) {
        const destination = prompt("Enter your destination (London, Paris, or other):").toLowerCase();
        switch (destination) {
            case "london":
                return 183;
            case "paris":
                return 220;
            case "other":
                return 300;
            default:
                console.log("Invalid destination. Please enter 'London', 'Paris', or 'other'.");
        }
    }
}

function rentalCarCost() {
    while (true) {
        const days = parseInt(prompt("Enter the number of days you would like to rent the car:"));
        if (!isNaN(days) && days > 0) {
            let cost = days * 40;
            if (days >= 10) {
                cost *= 0.95;
            }
            return cost;
        } else {
            console.log("Please enter a valid positive number of days.");
        }
    }
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    console.log(`Total vacation cost: Hotel: $${hotel}, Plane tickets: $${plane}, Car rental: $${car}`);
    return total;
}

const totalCost = totalVacationCost();
console.log(`Total cost of the vacation: $${totalCost}`);
