// Populate popular games
const popularGamesContainer = document.querySelector('.popular-games');
const popularGames = [
    { name: 'Conqueror Of Kingdoms Crowns', developer: 'Cwoo', rating: 4.5 },
    { name: 'Influencer Simulator 2024', developer: 'Electronic sim', rating: 5.5 },
    { name: 'Tetrotis Arcade', developer: 'Just Corp', rating: 3.5 },
    { name: 'Idle Bank Town Simulator', developer: 'Hotlizard', rating: 4.2 },
];

popularGames.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.innerHTML = `
        <img src="game-thumbnail.jpg" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.developer}</p>
        <p>${game.rating} ★</p>
    `;
    popularGamesContainer.appendChild(gameCard);
});

// Populate trending games
const trendingGamesContainer = document.querySelector('.trending-games');
const trendingGames = [
    { name: 'Conqueror Of Kingdoms Crowns', developer: 'Cwoo', rating: 4.5 },
    { name: 'Fighter Jet Ultra', developer: 'Playmonx Inc', rating: 3.2 },
    { name: 'Racing Mania', developer: 'India games', rating: 3.5 },
    { name: 'APEX Shooter', developer: 'PlayGames', rating: 5.1 },
    { name: 'Influencer Simulator 2024', developer: 'Electronic sim', rating: 5.5 },
];

trendingGames.forEach((game, index) => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.innerHTML = `
        <span>${index + 1}</span>
        <img src="game-thumbnail.jpg" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.developer}</p>
        <p>${game.rating} ★</p>
    `;
    trendingGamesContainer.appendChild(gameCard);
});

// Populate top apps
const topAppsContainer = document.querySelector('.top-apps');
const topApps = [
    { name: 'Racing mania', category: 'ARCADE', developer: 'India games', rating: 3.5, downloads: 20000 },
    { name: 'CRAS: Tactical Unit Shooter', category: 'ARCADE', developer: 'Shotterlob', rating: 4.3, downloads: 20000 },
    { name: 'Train Sim 2024', category: 'ACTION', developer: 'Player two games', rating: 4.4, downloads: 20000 },
    { name: 'Influencer Simulator 2024', category: 'SPORTS', developer: 'Electronic sim', rating: 5.5, downloads: 20000 },
    { name: 'Battle Cruiser', category: 'ACTION', developer: 'Shellfire Games', rating: 4.2, downloads: 20000 },
    { name: 'Jet Bomber', category: 'ARCADE', developer: 'Blazing Bits', rating: 4.7, downloads: 20000 },
    { name: 'Idle Bank Town Simulator', category: 'SIMULATION', developer: 'Hotlizard', rating: 4.1, downloads: 20000 },
    { name: 'Conqueror Of Kingdoms Crowns', category: 'RPG', developer: 'Cwoo', rating: 4.6, downloads: 20000 },
];

topApps.forEach(app => {
    const appCard = document.createElement('div');
    appCard.classList.add('top-app-card');
    appCard.innerHTML = `
        <img src="app-icon.jpg" alt="${app.name}">
        <h3>${app.category}</h3>
        <p>${app.name}</p>
        <p>${app.developer}</p>
        <p>${app.rating} ★ | ${app.downloads} downloads</p>
    `;
    topAppsContainer.appendChild(appCard);
});

// Platform button functionality
const platformButtons = document.querySelectorAll('.platform-buttons button');

platformButtons.forEach(button => {
    button.addEventListener('click', () => {
        platformButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterTopApps(button.textContent.toLowerCase());
    });
});

// Filter top apps based on platform
function filterTopApps(platform) {
    const topAppCards = document.querySelectorAll('.top-app-card');
    topAppCards.forEach(card => {
        const category = card.querySelector('h3').textContent.toLowerCase();
        if (platform === 'all categories' || category === platform) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}