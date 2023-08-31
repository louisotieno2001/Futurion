function addConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');

    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}

// Call addConfetti when the page loads or when the success event occurs
document.addEventListener('DOMContentLoaded', addConfetti);
