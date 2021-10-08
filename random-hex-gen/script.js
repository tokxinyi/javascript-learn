const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

// when is it arrow function and when is it not?
const generateColour = () => {
    const randomColour = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + randomColour;
    hex.innerHTML = "#" + randomColour; // to update the colour code = current background colour
};

// add an event listener
btn.addEventListener("click", generateColour);

generateColour();