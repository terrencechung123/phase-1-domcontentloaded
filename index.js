// Your code goes here

document.addEventListener("DOMContentLoaded", () => console.log("The Dom has loaded"));

//Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
const text = document.getElementById('text');

document.addEventListener("DOMContentLoaded", () => text.textContent = 'This is really cool!');