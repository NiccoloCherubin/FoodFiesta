// Funzione per mostrare i ristoranti
function displayRestaurants(restaurants) {
    const container = document.getElementById('restaurants-container');
    container.innerHTML = ''; // Pulisce il contenuto esistente

    restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement('div');
        restaurantElement.classList.add('restaurant');

        restaurantElement.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>Specializzazione: ${restaurant.specialization}</p>
            <p>Stelle: ${restaurant.stars}</p>
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <ul>
                ${restaurant.informations.map(info => `<li><strong>${info.name}:</strong> ${info.value}</li>`).join('')}
            </ul>
        `;

        container.appendChild(restaurantElement);
    });
}

// Si verifica quando tutti gli elementi HTML sono stati caricati
document.addEventListener('DOMContentLoaded', () => {
    displayRestaurants(ristoranti);
});
