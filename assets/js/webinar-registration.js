// Get the modal
var modal = document.getElementById("reserve-yourSpot");

// Get all buttons with class 'spots-left'
var btns = document.querySelectorAll(".spots-left");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When any button with class 'spots-left' is clicked, open the modal 
btns.forEach(function(btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
});

// Event listener to close the modal when the span is clicked
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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
   }
 }, 1000);
}
}

// Function to reset the countdown timer
function resetCountdown() {
    // Reset the countdown to default values
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";
countDownDuration = 10 * 60; // Reset the countdown duration to 10 minutes
countdownStarted = false; // Reset the flag to false
}

// Start the countdown when the page loads
document.addEventListener('DOMContentLoaded', function () {
startCountdown();
});

document.querySelector('.submit-form').addEventListener('click', function(e) {
    e.preventDefault();
    // debugger;

    var name = document.querySelector('input[type="text"]');
    var email = document.querySelector('input[type="email"]');

    var isNameValid = validateName(name);
    var isEmailValid = validateEmail(email);

    if (isEmailValid && isNameValid) {
        this.textContent = "Submitting..."; // Update the button text
        window.location.href = "./waiting-room-page.html";
    }
});

function validateName(nameInput) {
    if (!nameInput.value) {
        nameInput.style.border = '2px solid red';
        return false;
    } else {
        nameInput.style.border = '2px solid green';
        return true;
    }
}

function validateEmail(emailInput) {
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.match(validEmail)) {
        emailInput.style.border = '2px solid green';
        return true;
    } else {
        emailInput.style.border = '2px solid red';
        return false;
    }
}

