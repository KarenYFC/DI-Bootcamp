const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Review About Objects
//Copy and paste the above object to your Javascript file.

//Console.log the number of floors in the building.
console.log(`The number of floors in the building is ${building.numberOfFloors}.`);

//Console.log how many apartments are on the floors 1 and 3.
const firstFloorApartments = building.numberOfAptByFloor.firstFloor;
const thirdFloorApartments = building.numberOfAptByFloor.thirdFloor;

console.log(`Number of apartments on the first floor: ${firstFloorApartments}`);
console.log(`Number of apartments on the third floor: ${thirdFloorApartments}`);

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(`Dan's rent has been increased to $1200.`);
}