const total = document.getElementById("total");
const split = document.getElementById("split");
const button = document.getElementById("button");
const h2 = document.getElementById("h2");

button.addEventListener("click", isEmpty);

function change() {
  console.log('yolo');
}

function isEmpty() {
    if(total.value === "" || split.value === "") {
        error.textContent = "PLease enter a number";
        error.classList.add('display');
    }
}