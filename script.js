/**
 * Bento Grid Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Tracking Glow Effect for Bento Cards
    const cards = document.querySelectorAll('.bento-card');

    document.querySelector('main').addEventListener('mousemove', (e) => {
        for (const card of cards) {
            const rect = card.getBoundingClientRect();

            // Calculate mouse position relative to the card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set CSS variables for the background radial gradient glow
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    });
});
