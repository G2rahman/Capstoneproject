var prompt=require("prompt-sync")();
console.log("1 = add\n2 = subtract\n3 = multiply\n4 = divide\n5 = exit");
let operator= num(
    prompt("Choose an operation.")
);
if (operator ===5) {
    console.log("Operation invalid.");
} else if (operator === 1 || 2 || 3 || 4) {
  let num1 = Number(prompt("Whats the first number: "));
  let num2 = Number(prompt("Whats the second number: "));
  switch (operator) {
    case 1:
      console.log(num1 + num2);
      break;
    case 2:
      console.log(num1 - num2);
      break;
    case 3:
      console.log(num1 / num2);
      break;
    case 4:
      console.log(num1 * num2);
      break;
    default:
      console.log("Operation invalid.");
      break;
  }
} else {
  console.log("Invalid Menu Choice.");
}