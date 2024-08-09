// alert, confirm and prompt
// built-in functions that allows you to interact with users through dialog boxes

// alert

// alert("Your Important Message");

// confirm
// confirmation dialog box with OK and Cancel buttons
// returns a boolean(true or false)

// var result = confirm("Are you 18+");
// alert(result);

// prompt
// with a message, an input field for user to enter text and OK, cancel buttons

// var userInput = prompt("Please enter your name: ");

// alert(userInput);

// Ask for input for two numbers and add them and show the result as alert

var firstNumber = parseInt(prompt("Enter the first number"));
var secondNumber = parseInt(prompt("Enter the second number"));
var sum = firstNumber + secondNumber;
alert(sum);
