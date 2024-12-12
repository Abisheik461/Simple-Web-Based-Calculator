// Select the display element
let d = document.querySelector(".display");

// Clears the display
function clearDisplay() {
    d.value = ""; // Reset the display value
}

// Evaluates the expression
function calc() {
    try {
        d.value = eval(d.value);
        // Function(`'use strict'; return (${d.value})`)(); // Safely evaluate the expression
    } catch (error) {
        d.value = "Error"; // Handle invalid expressions
    }
}

// Appends a number or operator to the display
function append(nu) {
    d.value += String(nu); // Append the input to the display value
}
