// script.js

// Function to greet the user
function greetUser() {
    var name = prompt("What's your name?");
    alert("Hello, " + name + "! Welcome to our website!");
}

// Function to display the current date
function displayDate() {
    var currentDate = new Date().toLocaleDateString();
    alert("Today's date is: " + currentDate);
}
