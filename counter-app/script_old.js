const count = document.querySelector(".count");
const add = document.querySelector(".add");
// reset is a reserved word in javascript
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");

//not the recommended way
add.addEventListener("click", () => {
    count.innerHTML++ //increase the value by one
})

sub.addEventListener("click", () => {
    count.innerHTML-- //subtract the value by one
})

resetCount.addEventListener("click", () => {
    count.innerHTML = 0; //reset the value to 0
})