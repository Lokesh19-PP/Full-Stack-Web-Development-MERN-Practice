function calculate(operator) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const display = document.getElementById("display");

  if (isNaN(n1) || isNaN(n2)) {
    display.innerText = "Please enter numbers";
    return;
  }

  let result = 0;

  if (operator === "+") {
    result = n1 + n2;
  } else if (operator === "-") {
    result = n1 - n2;
  } else if (operator === "*") {
    result = n1 * n2;
  } else if (operator === "/") {
    if (n2 === 0) {
      display.innerText = "Cannot divide by 0";
      return;
    }
    result = n1 / n2;
  }
  display.innerText = "Result: " + result;
}
