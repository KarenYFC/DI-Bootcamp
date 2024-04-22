//Create an object called family with a few key value pairs.
const family = {
    father: "John",
    mother: "Mary",
    children: ["Alice", "Bob", "Charlie"],
};

console.log(family);

//Using a for in loop, console.log the keys of the object.
for (const key in family) {
    console.log(key);
}

//Using a for in loop, console.log the values of the object.
for (const key in family) {
    console.log(key + ": " + family[key]);
}