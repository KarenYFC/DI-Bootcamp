//Write a JavaScript program that recreates the pattern below.
//Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
//Do this Daily Challenge by yourself, without looking at the answers on the internet.
//*  
//* *  
//* * *  
//* * * *  
//* * * * *
//* * * * * *

//One loop:
function createPatternOneLoop(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('* '.repeat(i));
    }
}

const rows = 6;

console.log('Pattern using one loop:');
createPatternOneLoop(rows);

console.log("...................................")
//Two nested for loops:
function createPatternNestedLoops(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

console.log('\nPattern using nested loops:');
createPatternNestedLoops(rows);
