const numbers = document.querySelector(".numbers");
const calculateBtn = document.querySelector(".calculate");
const error = document.querySelector(".error");
const result = document.querySelector(".result");

calculateBtn.addEventListener("click", () => {
  result.value = "";

  if (numbers.value === "") {
    error.innerHTML = "Please enter numbers in the textbox above.";
    return;
  }

  const numValues = String(numbers.value)
    .split("\n")
    .map((value) => parseFloat(value));

  if (numValues.includes(NaN)) {
    error.innerHTML = "Only numbers are accepted in the textbox!";
    return;
  }

  error.innerHTML = "";

  const sum = numValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  result.value = (sum / numValues.length).toFixed(2);
});
