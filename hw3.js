/* let text="Why's this so hard" */
var prompt = require("prompt-sync")();


/* Get a string from the user */
let phrase = String(prompt("Enter a sentence:"))
let word = String(prompt("Enter a word: "))
// This is the string split into an array
let stringArray = phrase.split(" ")
// this counter is needed to count the amount of times a word shows up in the string
let number = 0


for(let i = 0; i < stringArray.length; i++){
	if(stringArray[i].toLowerCase() === word.toLowerCase()){
  	number++
  }
}

console.log(word + " shows up " + number + " times in the sentence.")
