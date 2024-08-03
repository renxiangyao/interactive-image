document.addEventListener('DOMContentLoaded', function () {
    const hotspots = document.querySelectorAll('.hotspot');
    const infoBox = document.getElementById('info-box');
    const infoImage = document.getElementById('info-image');
    const infoLink = document.getElementById('info-link');

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function (event) {
            const imageUrl = hotspot.getAttribute('data-image');
            const linkUrl = hotspot.getAttribute('data-link');

            infoImage.src = imageUrl;
            infoLink.href = linkUrl;

            const hotspotRect = hotspot.getBoundingClientRect();
            const infoBoxRect = infoBox.getBoundingClientRect();
            const top = hotspotRect.top - infoBoxRect.height - 10; // Adjust as needed
            const left = hotspotRect.left - (infoBoxRect.width / 2) + (hotspotRect.width / 2); // Center above hotspot

            infoBox.style.top = `${top}px`;
            infoBox.style.left = `${left}px`;
            infoBox.style.display = 'block';
        });
    });

    document.addEventListener('click', function (event) {
        if (!infoBox.contains(event.target) && !Array.from(hotspots).includes(event.target)) {
            infoBox.style.display = 'none';
        }
    });
});
