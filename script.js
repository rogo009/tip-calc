// variables
const total = document.getElementById("total");
const split = document.getElementById("split");
let tip;

const button = document.getElementById("button");
const error = document.getElementById("error");
// const h2 = document.getElementById("h2");

// event listeners
// button.addEventListener("click", round);
// button.addEventListener("click", split);
button.addEventListener("click", check);
button.addEventListener("click", calc);

// function that displays error div
function display() {
  error.classList.add("display");
  setTimeout(function() {
    error.classList.remove("display");
  }, 3000);
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
  let person = Number(Math.round(split.value));
  // console.log(total.value * tip.value)
  let percentAmount = console.log(total.value * 0.2);
  console.log(percentAmount + total);
  // console.log(totalAmout);
  console.log(total.value / person);
}

// function that rounds input to nearest integer (prevent user input 2.2 persons)
// function round() {
//   let person = Math.round(split.value);
// }

const calculateTip = function(billAmount, numUsers, selectedService) {
   
  let percentTip = '';
  if (selectedService === "1"){
    percentTip = 0.2;
  } else if (selectedService === "2"){
    percentTip = 0.1;
  } else {
    percentTip = 0.02;
  }
  
  const tipAmount = Number(billAmount)*percentTip;
  const totalAmount = Number(billAmount) + Number(tipAmount);
  const eachPerson = Number(totalAmount) / Number(numUsers);
  
  return [tipAmount, totalAmount, eachPerson];
 
  
};