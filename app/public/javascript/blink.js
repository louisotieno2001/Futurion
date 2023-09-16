const blinkingSpan = document.getElementById("blinkingSpan");

function toggleBlinking() {
    if (blinkingSpan.style.display === "none") {
        blinkingSpan.style.display = "block";
    } else {
        blinkingSpan.style.display = "none";
    }
}

// Set the blinking interval (milliseconds)
const blinkInterval = 500; // 500ms or half a second

// Start the blinking effect
const blinkIntervalId = setInterval(toggleBlinking, blinkInterval);

// Stop blinking after a certain duration (e.g., 5 seconds)
// const stopBlinkingAfter = 5000; // 5000ms or 5 seconds
// setTimeout(() => {
//     clearInterval(blinkIntervalId);
//     blinkingSpan.style.display = "block"; // Ensure the span is visible when stopped
// }, stopBlinkingAfter);
