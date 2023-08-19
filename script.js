const dateYearElement = document.getElementById('dateYear');
const clockElement = document.getElementById('clock');
const showTimeBtn = document.getElementById('showTimeBtn');
const imageContainer = document.getElementById('imageContainer');
const displayedImage = document.getElementById('displayedImage');

function updateDateYear() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateYearElement.textContent = dateString;
}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

function showImage() {
    const imageUrl = 'image.png'; // Replace with the actual image URL
    displayedImage.src = imageUrl;
    displayedImage.style.display = 'block';
}

showTimeBtn.addEventListener('click', () => {
    updateTime();
    showImage();
});

updateDateYear();
