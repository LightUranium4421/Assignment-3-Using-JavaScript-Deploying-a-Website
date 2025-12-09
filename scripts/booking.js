/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const buttons = document.querySelectorAll(".booking-page ul .blue-hover");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("clicked")) {
      element.classList.remove("clicked");
      numberOfDays -= 1;
    } else {
      element.classList.add("clicked");
      numberOfDays += 1;
    }

    calculateCost();
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear() {
  buttons.forEach((element) => {
    if (element.classList.contains("clicked")) {
      element.classList.remove("clicked");
    }
    if (halfButton.classList.contains("clicked")) {
      halfButton.classList.remove("clicked");
    }
    fullButton.classList.add("clicked");
    numberOfDays = 0;
    costPerDay = 35;
    calculateCost();
  });
}

clearButton.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", () => {
  if (fullButton.classList.contains("clicked")) {
    fullButton.classList.remove("clicked");
  }
  halfButton.classList.add("clicked");
  costPerDay = 20;
  calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", () => {
  if (halfButton.classList.contains("clicked")) {
    halfButton.classList.remove("clicked");
  }
  fullButton.classList.add("clicked");
  costPerDay = 35;
  calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const costElement = document.getElementById("calculated-cost");

function calculateCost() {
  let totalCost = costPerDay * numberOfDays;
  costElement.innerHTML = totalCost;
}
