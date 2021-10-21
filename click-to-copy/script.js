const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");


// arrow function must be defined first before we can call it
const copyText = (e) => {
    // prevent the default behaviour from happening which is refresh the page
    e.preventDefault();

    // select the text from the input box
    coupon.select();
    // define where you want to select
    coupon.setSelectionRange(0, 9999999);
    // document.execCommand() is deprecated but still work as of Oct 2021
    document.execCommand("copy");

    btn.textContent = "Copied!";
    // reset the button content after 3 seconds
    setTimeout(() => {
        btn.textContent = "Copy";
    }, 3000)
}

btn.addEventListener("click", copyText);