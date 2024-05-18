const loadHiddenNavItem = function () {
    let navitems = document.querySelectorAll(".nav-item");
    let navbar = document.querySelector("nav");
    let item = document.createElement("a");
    item.href = "prenotazione.html";
    item.textContent = "Prenotazione";
    item.classList = "nav-item active";
    navbar.insertBefore(item, navitems[navitems.length - 1]);
}

const loadRestaurantData = function(restaurant)
{
    let informations = document.querySelector(".restaurant-informations");
    document.querySelector("#restaurant-title").textContent = restaurant.name;
    document.querySelector("#restaurant-specialization").textContent = restaurant.specialization;
    document.querySelector("#restaurant-image").src = restaurant.image;
    document.querySelector("#stars").style.width = restaurant.stars * 20 + "px";
    for (information in restaurant.informations)
    {
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

if (localStorage.getItem("logged") == "true")
{
    if (localStorage.getItem("restautantIndex") != null)
    {
        loadHiddenNavItem();
        loadRestaurantData(ristoranti[localStorage.getItem("restautantIndex")]);
        document.querySelector(".input-form").addEventListener("submit", function(event){
            event.preventDefault();
            alert("Prenotazione effettuata con successo!")
        });
    }
    else 
    {
        displayError("Nessun ristorante selezionato", "Per visualizzare questa pagina devi selezionare un ristorante.");
    }
} else
{
    displayError("Non sei autenticato", "Per visualizzare questa pagina devi essere autenticato.");
}