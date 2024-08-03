document.addEventListener('DOMContentLoaded', function () {
    const hotspots = document.querySelectorAll('.hotspot');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const popupLink = document.getElementById('popupLink');

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function () {
            const imageSrc = this.getAttribute('data-image');
            const linkHref = this.getAttribute('data-link');
            const rect = this.getBoundingClientRect();

            popupImage.src = imageSrc;
            popupLink.href = linkHref;

            popup.style.display = 'block';
            popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight}px`;
            popup.style.left = `${rect.left + window.scrollX}px`;
        });
    });

    document.addEventListener('click', function (e) {
        if (!popup.contains(e.target) && !Array.from(hotspots).some(hotspot => hotspot.contains(e.target))) {
            popup.style.display = 'none';
        }
    });
});
