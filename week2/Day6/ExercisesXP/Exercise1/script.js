const people = ["Greg", "Mary", "Devon", "James"];

//Part I - Review About Arrays
//Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

//Write code to replace “James” to “Jason”.
people.splice(2,1,"Jason");
console.log(people);

//Write code to add your name to the end of the people array.
people.push("Karen");
console.log(people);

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const maryIndex = people.indexOf("Mary");
console.log(`Mary's index in the people array is ${maryIndex}.`);

//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
//Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//Hint: Check out the documentation for the slice method
console.log(people);
//['Mary', 'Devon', 'Jason', 'Karen']
const copyOfPeople = people.slice(1, 3);
console.log(copyOfPeople);

//Write code that gives the index of “Foo”. Why does it return -1 ?
const fooIndex = people.indexOf("Foo");
console.log(`The index of "Foo" in the people array is ${fooIndex}.`);
//Because "Foo" does not exist in the array

//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people[people.length - 1];
console.log(`The last element of the array is: ${last}`);

//Part II - Loops
//Using a loop, iterate through the people array and console.log each person.
for (const person of people) {
    console.log(person);
}

//Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//Hint: take a look at the break statement in the lesson.
for (const person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}