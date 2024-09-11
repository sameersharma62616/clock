function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate rotation degrees for each hand
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    // Update the rotation of each hand
    document.querySelectorAll('.hand')[0].style.transform = `rotate(${secondDegrees}deg)`;
    document.querySelectorAll('.hand')[1].style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelectorAll('.hand')[2].style.transform = `rotate(${hourDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
