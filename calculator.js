let operator = prompt("operator:  "),
    number1 = prompt("number1:  "),
    number2 = prompt("number2:  ");

    if(operator === "+") {
        console.log(number1 + number2)
    } else if (operator ==="-") {
        console.log(number1 - number2)
    } else if(operator ==="*") {
        console.log(number1 * number2)
    } else if(operator ==="/") {
        console.log(number1 / number2)
    }