var prompt = require("prompt-sync")();

let input = prompt("Enter a value: ");

const random = ["spider-man", "pants", "movie", "per scholas"];

for (let i = 0; i < random.length; i++) {
  if (input === random[i]) {
    console.log(`${input} was found in index ${i} of the array!`);
  }
}