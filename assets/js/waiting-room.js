    // Set the target time for the countdown (2 minutes and 30 seconds)
    const targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + 2);
    targetDate.setSeconds(targetDate.getSeconds() + 30);
    const targetTime = targetDate.getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const timeDifference = targetTime - currentTime;

        if (timeDifference <= 0) {
            // If the countdown is over, clear the interval
            clearInterval(countdownInterval);
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        } else {
            // Calculate remaining minutes and seconds
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Update the HTML elements
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = padZero(minutes);
            document.getElementById('seconds').textContent = padZero(seconds);
        }
    }

    function padZero(value) {
        // Add leading zero if the value is less than 10
        return value < 10 ? '0' + value : value;
    }