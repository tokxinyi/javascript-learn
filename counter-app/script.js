
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");


// recommended way
buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")){
        //console.log("add"); // log appears when you are inspecting the website
        count.innerHTML++;
        setColor();
    }

    if (e.target.classList.contains("subtract")){
        //console.log("subtract"); // log appears when you are inspecting the website
        count.innerHTML--;
        setColor();
    }

    if (e.target.classList.contains("reset")){
        //console.log("reset"); // log appears when you are inspecting the website
        count.innerHTML = 0;
        setColor();
    }
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    }
    else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    }
    else {
        count.style.color = "#fff";
    }
}

