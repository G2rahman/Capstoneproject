let count=0;
//select value/button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")
//console.log(btn1);
//console.log(btn2);

btns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
    //value.textContent=value++;
    const styles = e.currentTarget.classList;
    //check if the target has decrease "property"
    if (styles.contains("decrease")){
        count--;
    }else if(styles.contains("increase")){
        count++;
    }else{ 
        count=0;
    }

    if (count > 0) {
        value.style.color="green";
    }
    if (count < 0){
        value.style.color="red";
    }
    if (count === 0){
        value.style.color="#222";
    }
    value.textContent = count;
    //set equal to new count value
    //you pull up classlist so you can modify it
    });
});