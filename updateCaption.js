const topCaption = document.querySelector(".top");
const inputBox = document.querySelector("#user_input");

function updateCaption(){
    console.log("updating caption")
    console.log(topCaption)
    console.log(inputBox)
    console.log(topCaption.textContent)
    console.log(inputBox.value)
    topCaption.textContent = inputBox.value;
}