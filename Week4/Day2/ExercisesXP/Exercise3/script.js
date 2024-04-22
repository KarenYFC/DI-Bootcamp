//Create a function call isDivisible() that takes no parameter.

//In the function, loop through numbers 0 to 500.

//Console.log all the numbers divisible by 23.

//At the end, console.log the sum of all numbers that are divisible by 23.

//Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368 391 414 437 460 483
//Sum : 5313

function isDivisible() {
    let totalSum = 0;
    
    for (let num = 0; num <= 500; num++) {
        if (num % 23 === 0) {
            console.log(num);
            totalSum += num;
        }
    }
    
    console.log(`Sum of numbers divisible by 23: ${totalSum}`);
}

isDivisible();
