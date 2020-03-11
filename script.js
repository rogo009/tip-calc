const total = document.getElementById("total");
const split = document.getElementById("split");
const button = document.getElementById("button");
const h2 = document.getElementById("h2");
const error = document.getElementById("error");

button.addEventListener("click", check);
button.addEventListener("click", split);
button.addEventListener('click', convert);

// function that displays error
function display() {
  error.classList.add('display');
  setTimeout(function() {
    error.classList.remove('display');
  }, 3000);
}

function check() {
    if(total.value === "" || split.value === "" || total.value <= 0 || split.value <= 0) {
        display();
    }
    if (isNaN(total.value)) {
      display();
    }
    if (isNaN(split.value)) {
      display();
    }
}

// function divide() {

// }


// function that divides total cost by # of people
// function split() {
//   total.value / split.value;
// }