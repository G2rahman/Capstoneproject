var prompt= require("prompt-sync")();
let phrase=String(prompt("Text))
let stringArray=string.split("")
let word=String(rompt("How many times has a word been repeated?:"))
number=0
for(let i=0;i<stringArray.length;i++){
    if(stringArray[i].toLowercase()===word.toLowerCase()){
        number++
    }
}
console.log((`"${word}" is in the paragraph/sentence ${counter} times`)