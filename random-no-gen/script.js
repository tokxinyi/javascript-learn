// automatically generate a number from 0 (inclusive) to 1 (exclusive)  
// const rand = Math.floor(Math.random() * 10) + 1;
// console.log(rand);

const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    // generate number between 1 and 10
    const rand = Math.floor(Math.random() * 10) + 1;
    number.innerHTML = rand;
}

btn.addEventListener("click", generateNumber);

// if you want the page to generate a number when the page is refreshed, call the function
generateNumber();