document.addEventListener('DOMContentLoaded', function () {
    const hotspots = document.querySelectorAll('.hotspot');
    const infoBox = document.getElementById('info-box');

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function () {
            const info = hotspot.getAttribute('data-info');
            infoBox.textContent = info;
            infoBox.style.display = 'block';
        });
    });
});
