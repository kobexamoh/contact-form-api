// JavaScript Sandbox

// Demo functionality
const button = document.getElementById('demo-button');
const output = document.getElementById('output');

let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;
  output.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
});

// My code starts here
console.log("JS sandbox working...");