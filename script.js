// 🚀 Assignment: Mastering JavaScript Fundamentals

// ❤️ Part 1: Mastering JavaScript Basics
// Declare variables, use data types, conditionals, and output results

// Example variables and conditional
let userName = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
  console.log(`Hello, ${userName}. You are an adult.`);
} else {
  console.log(`Hi, ${userName}. You are a minor.`);
}

// 🎯 Part 2: JavaScript Functions — The Heart of Reusability

// Function to greet user (takes a name as input)
function greetUser(name) {
  return `Welcome, ${name}! Let's learn JavaScript.`;
}
console.log(greetUser(userName));
// Function to calculate square of a number
function square(num) {
  return num * num;
}
console.log(`The square of 5 is ${square(5)}`);
// Use the functions and display results

// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!

// Example 1: For loop to list numbers from 1 to 5
console.log("Counting from 1 to 5 using for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Example 2: While loop to countdown from 5 to 1
console.log("Countdown from 5 to 1 using while loop:");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

// 🌐 Part 4: Mastering the DOM with JavaScript

// Change webpage content: Select an element and change its text
const header = document.getElementById("header");
header.textContent = "JavaScript DOM Manipulation Example";

// Toggle class on a button when clicked
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", function () {
    console.log("Toggle button clicked"); 
    document.body.classList.toggle("dark-mode");
});

// Create and add a new paragraph element dynamically
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically using JavaScript!";
document.body.appendChild(newPara);
