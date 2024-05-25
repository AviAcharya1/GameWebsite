// Get the carousel container and slides
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');

// Add event listeners for navigation
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Functions to handle slide navigation
function showPrevSlide() {
  // Logic to show the previous slide
}

function showNextSlide() {
  // Logic to show the next slide
}


// Get the search input and game cards
const searchInput = document.querySelector('.search input');
const gameCards = document.querySelectorAll('.game-card');

// Add event listener for input change
searchInput.addEventListener('input', filterGames);

function filterGames() {
  const searchTerm = searchInput.value.toLowerCase();

  gameCards.forEach(card => {
    const gameName = card.querySelector('h3').textContent.toLowerCase();

    if (gameName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Get the registration form
const registrationForm = document.querySelector('.registration form');

// Add event listener for form submission
registrationForm.addEventListener('submit', registerForTournament);

function registerForTournament(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const tournament = document.querySelector('#tournament').value;

  // Validate form data
  if (name.trim() === '' || email.trim() === '' || tournament === '') {
    alert('Please fill in all fields');
    return;
  }

  // Submit form data (you'll need a backend server for this)
  // ...

  // Show a success message
  alert('Registration successful!');

  // Reset form
  registrationForm.reset();
}

function initMap() {
    // Get the map container
    const mapContainer = document.getElementById('map');
  
    // Create a new map instance
    const map = new google.maps.Map(mapContainer, {
      center: { lat: 37.7749, lng: -122.4194 }, // Set your desired location
      zoom: 12
    });
  
    // Add a marker or other map customizations
    const marker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
      title: 'Gaming Site'
    });
  }