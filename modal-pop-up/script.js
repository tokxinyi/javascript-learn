// variables
const modal = document.querySelector(".modal"),
        btn = document.querySelector(".btn"),
        close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
// when clicking on the modal container, it will close the modal
modal.addEventListener("click", closeModal);

// open the modal
function openModal(e) {
    // default behaviour of a button in the form will refresh the page when the button is clicked
    // this method prevents that default behaviour from happening
    e.preventDefault();
    modal.style.display = "block";
}

// close modal
function closeModal() {
    modal.style.display = "none";
}

