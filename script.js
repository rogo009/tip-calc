const total = document.getElementById("total");
const split = document.getElementById("split");
const button = document.getElementById("button");
const h2 = document.getElementById("h2");
const error = document.getElementById("error");

button.addEventListener("click", isEmpty);

function change() {
  console.log('yolo');
}

function isEmpty() {
    if(total.value === "" || split.value === "") {
        error.textContent = "Please enter a number in both fields";
        error.classList.add('display');
    }
}