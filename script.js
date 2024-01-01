document.addEventListener('DOMContentLoaded', function() {
    createFirework();
});

function createFirework() {
    const fireworksContainer = document.body;
    const firework = document.createElement('div');
    firework.className = 'firework';
    fireworksContainer.appendChild(firework);

    firework.addEventListener('animationend', () => {
        firework.remove();
        createFirework(); // Launch a new firework after the animation ends
    });
}
