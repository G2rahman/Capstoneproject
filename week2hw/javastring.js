prompt = require("prompt-sync")();

let str = String(prompt("Check for palindrome:"));
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i]
}

if (str === reversed) {
  console.log("It is a palindrome")
} else {
  console.log("It is not a palindrome")
}

