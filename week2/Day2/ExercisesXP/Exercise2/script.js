//Part I
//Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
var myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

//Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//For example : black mirror, money heist, and the big bang theory
var myWatchedSeriesSentence = myWatchedSeries[0] + ', ' + myWatchedSeries[1] + ' and ' + myWatchedSeries[2];
console.log(myWatchedSeriesSentence) 

//Console.log a sentence using both of the variables created above
//For example : I watched 3 series : black mirror, money heist, and the big bang theory
console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence);

//Part II
//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("the blacklist");
console.log(myWatchedSeries);

//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("the crown");
console.log(myWatchedSeries);

//Delete the series “black mirror”.
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

//Console.log the third letter of the series “money heist”.
var moneyHeist = myWatchedSeries[1];
console.log(moneyHeist[2]);

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);








