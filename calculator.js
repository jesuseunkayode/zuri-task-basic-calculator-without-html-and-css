let firstNumber = Number.parseInt(prompt("Enter first number:   "), 10),
  operator = prompt("Enter the arithmetic operator:  "),
  secondNumber = Number.parseInt(prompt("Enter second number:  "), 10);

if (operator === "+") {
  alert(firstNumber + secondNumber);
} else if (operator === "-") {
  alert(firstNumber - secondNumber);
} else if (operator === "*") {
  alert(firstNumber * secondNumber);
} else if (operator === "/") {
  alert(firstNumber / secondNumber);
}
