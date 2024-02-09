// Get the modal

var modal = document.getElementById("pop-up");
modal.style.display = "none";
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
modal.style.display = "none";
}
// Function to display the modal
 function displayModal() {
   modal.style.display = 'block';
document.addEventListener('click', closeIfOutside);
 }

 // Function to hide the modal
 function hideModal() {
   modal.style.display = 'none';

   // Remove the click event listener from the document
   document.removeEventListener('click', closeIfOutside);
 }

 // Function to close the modal if the click is outside of it
 function closeIfOutside(event) {
   if (!modal.contains(event.target)) {
     hideModal();
   }
 }
 setTimeout(displayModal, 10000);
var countdownStarted = false; // Flag to track whether countdown has started

// Set the default countdown duration to 10 minutes
var countDownDuration = 10 * 60;

// Function to pad single-digit numbers with a leading zero
function padZero(number) {
return (number < 10 ? "0" : "") + number;
}

// Function to start the countdown
function startCountdown() {
// Check if the countdown has already started
if (!countdownStarted) {
 countdownStarted = true; // Set the flag to true

 // Update the count down every 1 second
 var timeInterval = setInterval(function () {
   // Decrease the countdown duration
   countDownDuration--;

   document.getElementById("hours").innerHTML = padZero(Math.floor(countDownDuration / 3600));
   document.getElementById("minutes").innerHTML = padZero(Math.floor((countDownDuration % 3600) / 60));
   document.getElementById("seconds").innerHTML = padZero(countDownDuration % 60);

   // If the count down is finished, write some text
   if (countDownDuration < 0) {
     clearInterval(timeInterval);
     resetCountdown();
     displaySection(); // Call the function to reset the countdown timer
   }
 }, 1000);
}
}

// Function to display the apply section
function displaySection() {
document.getElementById('apply-now__section').style.display = "block";

// Reset the countdown to default values
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";

resetCountdown(); // Reset the countdown values and flag
}

// Function to reset the countdown timer
function resetCountdown() {
countDownDuration = 10 * 60; // Reset the countdown duration to 10 minutes
countdownStarted = false; // Reset the flag to false
}

// Start the countdown when the page loads
document.addEventListener('DOMContentLoaded', function () {
startCountdown();
});
