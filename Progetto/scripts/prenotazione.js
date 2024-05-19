// Funzione per caricare i dati del ristorante
const loadRestaurantData = function (restaurant) {
    // Carico i dati fissi
    let informations = document.querySelector(".restaurant-informations");
    document.querySelector("#restaurant-title").textContent = restaurant.name;
    document.querySelector("#restaurant-specialization").textContent = restaurant.specialization;
    document.querySelector("#restaurant-image").src = restaurant.image;
    document.querySelector("#stars").style.width = restaurant.stars * 20 + "px";
    // Carico le informazioni aggiuntive
    for (information in restaurant.informations) {
        let item = document.createElement("div");
        item.classList = "restaurant-information";

        let title = document.createElement("h3");
        title.textContent = restaurant.informations[information].name;
        item.appendChild(title);

        let content = document.createElement("p");
        content.textContent = restaurant.informations[information].value;
        item.appendChild(content);

        informations.appendChild(item);
    }
}

// Carico l'elemento nascosto nella navbar
loadHiddenNavItem("Prenotazione", "prenotazione.html");

// Controllo se l'utente è autenticato
if (localStorage.getItem("logged") == "true") {
    // Controllo se è stato selezionato un ristorante
    if (localStorage.getItem("restautantIndex") != null) {
        loadRestaurantData(ristoranti[localStorage.getItem("restautantIndex")])
    }
    else {
        displayError("Nessun ristorante selezionato", "Per visualizzare questa pagina devi selezionare un ristorante.");
    }
} else {
    displayError("Non sei autenticato", "Per visualizzare questa pagina devi essere autenticato.");
}