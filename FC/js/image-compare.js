// Image Compare Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const imageCompareContainers = document.querySelectorAll('.image-compare-container');
    
    imageCompareContainers.forEach(container => {
        const slider = container.querySelector('.image-compare-slider');
        const beforeImage = container.querySelector('.image-compare-before');
        let isDragging = false;
        
        // Set initial position to 50%
        updateSliderPosition(container, 50);
        
        // Mouse events
        slider.addEventListener('mousedown', () => {
            isDragging = true;
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const rect = container.getBoundingClientRect();
            const position = ((e.clientX - rect.left) / rect.width) * 100;
            updateSliderPosition(container, position);
        });
        
        container.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        container.addEventListener('mouseleave', () => {
            isDragging = false;
        });
        
        // Touch events for mobile
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            e.preventDefault();
        }, { passive: false });
        
        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            const position = ((touch.clientX - rect.left) / rect.width) * 100;
            updateSliderPosition(container, position);
            e.preventDefault();
        }, { passive: false });
        
        container.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Click anywhere on the container to move slider
        container.addEventListener('click', (e) => {
            const rect = container.getBoundingClientRect();
            const position = ((e.clientX - rect.left) / rect.width) * 100;
            updateSliderPosition(container, position);
        });
    });
    
    function updateSliderPosition(container, position) {
        // Constrain position between 0 and 100
        position = Math.max(0, Math.min(position, 100));
        
        // Update CSS variable
        container.style.setProperty('--position', `${position}%`);
    }
});
