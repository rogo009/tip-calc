const total = document.getElementById("total");
const split = document.getElementById("split");
const button = document.getElementById("button");
const h2 = document.getElementById("h2");
const error = document.getElementById("error");

button.addEventListener("click", round);
button.addEventListener("click", check);
button.addEventListener("click", split);
button.addEventListener("click", calc);

// function that displays error div
function display() {
  error.classList.add("display");
  setTimeout(function() {
    error.classList.remove("display");
  }, 3000);
}

// function that rounds input to nearest integer (prevent user input 2.2 persons)
function round() {
  console.log(Math.round(split.value));
  // how to assign a new var name to the integer and pass it into the split function?
}

function check() {
  if (
    total.value === "" ||
    split.value === "" ||
    total.value <= 0 ||
    split.value <= 0
  ) {
    display();
  }
  if (isNaN(total.value)) {
    display();
  }
  if (isNaN(split.value)) {
    display();
  }
}

//function that takes cost * tip % / # of people
function calc() {
  console.log(total.value / split.value);
}
