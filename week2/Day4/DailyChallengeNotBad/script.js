//Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
//For example, “The movie is not that bad, I like it”.
let sentence = "The movie is not that bad, I like it";
let sent = sentence.split(" ");
console.log(sent);
console.log(sent.length); //9

//Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sent.indexOf("not");
console.log(wordNot); //4

//Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sent.indexOf("bad,");
console.log(wordBad); 

//If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
//For example, the result here should be : “The movie is good, I like it”
//If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
 
if (wordBad > wordNot){
  sent.splice(3, 3, "good,");
  console.log(sent.join(" "));
}else{
  console.log(sentence);
}