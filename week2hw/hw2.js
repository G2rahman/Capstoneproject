let prompt = require("prompt-sync")(); 
let phrase = prompt("Enter your sentence:");
let charactercounter = 0;
let numbercounter = 0;
let specialcharactercounter = 0;
for (let i = phrase.length - 1; i >= 0; i--) {
  if (
    (phrase.toUpperCase().charCodeAt(i) >= 65 &&
      phrase.toUpperCase().charCodeAt(i) <= 90) 
  ) {
    charactercounter++;
  } else if (
    phrase.charCodeAt(i) >= 48 &&
    phrase.charCodeAt(i) <= 57
  ) {
    numbercounter++;
  } else {
    specialcharactercounter++;
  }
}
console.log(
  ("Your  phrase" + "contains" +charactercounter + "characters" + numbercounter + "numbers" + "and" + specialcharactercounter + "special" + "characters".
);