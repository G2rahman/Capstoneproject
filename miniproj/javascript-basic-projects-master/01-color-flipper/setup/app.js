const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click", function() {
    const thisrandomnumber=getrandom();
console.log(thisrandomnumber);
//you dont have a current.target is becuase you have an array so the the array colors, numbers replace the #fffff, not change it
    document.body.style.backgroundColor=colors[thisrandomnumber];
    color.textContent =colors[thisrandomnumber];
});

function getrandom() {
     return Math.floor(Math.random() * (colors.length));
}
