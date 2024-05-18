// Funzione per mostrare i ristoranti
function displayRestaurants(restaurants) {
  const container = document.getElementById("restaurants-container");

  restaurants.forEach((restaurant) => {
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
            </div>
        </div>
        `;

    container.appendChild(restaurantElement);
  });
}
displayRestaurants(ristoranti);
