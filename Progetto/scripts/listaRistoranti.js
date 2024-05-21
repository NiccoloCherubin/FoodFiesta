// Funzione per mostrare i ristoranti
function displayRestaurants(restaurants) {
  const container = document.getElementById("restaurants-container");

  restaurants.forEach((restaurant, index) => {
    const restaurantElement = document.createElement("div");
    restaurantElement.classList.add("restaurant");

    restaurantElement.innerHTML = `
        <div class="container">
            <div class="card">
                <h1>${restaurant.name}</h1>
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <p>Specializzazione: ${restaurant.specialization}</p>
                <p>Stelle: ${restaurant.stars}</p>
                <ul>
                    ${restaurant.informations
                      .map(
                        (info) =>
                          `<li><strong>${info.name}:</strong> ${info.value}</li>`
                      )
                      .join("")}
                </ul>
                <input type="submit" value="Prenota" class="button">
            </div>
        </div>
        `;

    container.appendChild(restaurantElement);

    // Gestore di eventi click per i bottoni di prenotazione
    const button = restaurantElement.querySelector('.button');
    button.addEventListener('click', () => {
      localStorage.setItem('restaurantIndex', index);
      //alert(`Ristorante selezionato: ${restaurant.name}`);
      location.href = 'prenotazione.html';
    });
  });
}
displayRestaurants(ristoranti);
