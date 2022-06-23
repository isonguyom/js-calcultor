// A simple javaScript arithmetic calculator 

console.log("Welcome to simple javaScript arithmetic calculator. It performs the following operations ( +, -, *, /)");
cal_running = true

while (cal_running) {
    console.log("Arithmetic calculator currently running");
    let operation, num1, num2, result, repeat
    // prompt for input values
    operation = prompt("Please enter operation you wish to perform (+, -, *, /)")
    
    try {
        num1 = parseFloat(prompt("Enter first number"))
    num2 = parseFloat(prompt("Enter second number"))
    } catch (error) {
        alert( error.message)
    }
    


    if (operation == '+') {
        result = num1 + num2;
    } else if (operation == '-') {
        result = num1 - num2;
    } else if (operation == '*') {
        result = num1 * num2;
    } else if (operation == "/") {
        result = num1 / num2;

    } else {
        alert("Invalid operation")
    }
    console.log(result)
    alert(result)
    repeat = prompt("Do you want to perform another calculation? (y/n)")
    if (repeat == 'y') {
        continue
    }
    if (repeat == 'n') {
        break
    }

}

console.log("Thanks for using the Calculator, bye bye...")
alert("Thanks for using the Calculator, bye bye...")