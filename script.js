// Get elements
const greetingElement = document.getElementById('greeting');
const datetimeElement = document.getElementById('datetime');

// Function to update greeting
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good morning, Tiara Hasna Nabila !';
    } else if (hour < 18) {
        greeting = 'Good afternoon, Tiara Hasna Nabila !';
    } else {
        greeting = 'Good evening, Tiara Hasna Nabila !';
    }

    greetingElement.textContent = greeting;
}

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const datetimeString = now.toLocaleDateString('en-US', options);
    datetimeElement.textContent = datetimeString;
}

// Update greeting and date/time initially
updateGreeting();
updateDateTime();

// Update greeting and date/time every second
setInterval(() => {
    updateGreeting();
    updateDateTime();
}, 1000);

// Menggeser carousel ke kiri setiap beberapa detik
setInterval(() => {
    const carousel = document.querySelector('.carousel');
    const firstItem = carousel.firstElementChild;
    carousel.appendChild(firstItem);
}, 3000); // Ganti angka 3000 dengan interval yang diinginkan dalam milidetik
