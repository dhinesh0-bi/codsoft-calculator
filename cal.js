const display = document.getElementById("dis");
let input = "";
function updateDisplay() {
  display.value = input;
}
function clearAll() {
  input = "";
  updateDisplay();
}
function backspace() {
  input = input.slice(0, -1);
  updateDisplay();
}
function calculateResult() {
  try {
    let result = eval(input); 
    input = result.toString();
    updateDisplay();
  } catch (error) {
    input = "Error";
    updateDisplay();
  }
}
function handleButtonClick(value) {
  if (value === "C") {
    clearAll();
  } else if (value === "⌫") {
    backspace();
  } else if (value === "=") {
    calculateResult();
  } else {
    input += value;
    updateDisplay();
  }
}
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    handleButtonClick(value);
  });
});