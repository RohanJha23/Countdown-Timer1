
function calculateTimeDifference(targetDate) {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the time difference (in milliseconds) between the target date and the current date
    const timeDifference = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds from the time difference
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Return the calculated values in an object
    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function updateCountdown() {
    // Define the target date
    const target = new Date(2023, 10, 12, 0, 0, 0, 0);

    // Calculate the time difference and store the result in variables
    const timeDifference = calculateTimeDifference(target);

    // Access the individual time components
    const daysRemaining = timeDifference.days;
    const hoursRemaining = timeDifference.hours;
    const minutesRemaining = timeDifference.minutes;
    const secondsRemaining = timeDifference.seconds;
    // Update the text inside the <h1> tags
    document.querySelector('#days h1').textContent = daysRemaining.toString().padStart(2, '0');
    document.querySelector('#hours h1').textContent = hoursRemaining.toString().padStart(2, '0');
    document.querySelector('#minutes h1').textContent = minutesRemaining.toString().padStart(2, '0');
    document.querySelector('#seconds h1').textContent = secondsRemaining.toString().padStart(2, '0');
}

// Call the updateCountdown function immediately
updateCountdown();

// Refresh the countdown every second
setInterval(updateCountdown, 1000);
