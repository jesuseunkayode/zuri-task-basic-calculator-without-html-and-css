let firstNumber = prompt("Enter first number:   "),
    operator = prompt("operator:  "),
    secondNumber = prompt("Enter second number:  ");

    if(operator ==="+") {
        alert(firstNumber + secondNumber);
    } 
    
    else if (operator ==="-") {
        alert(firstNumber - secondNumber);
    } 
    
    else if(operator ==="*") {
        alert(firstNumber * secondNumber);
    } 
    
     else if(operator ==="/") {
        alert(firstNumber / secondNumber);
    }