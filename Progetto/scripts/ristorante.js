const ristoranti = [{
    name: "Pissa e pissa",
    specialization: "Ristorante e pizzeria",
    stars: 4.5,
    image: "https://lh3.googleusercontent.com/p/AF1QipOgRT3q3I2TC-75hProq6sCiVEPdG6LIPEcf0ua=s680-w680-h510",
    informations: [
        {
            name: "Indirizzo",
            value: "Via Roma, 1 - 00100 Roma"
        },
        {
            name: "Numero di telefono",
            value: "+39 123 123 1234"
        },
        {
            name: "Specializzazione",
            value: "Ristorante e pizzeria"
        },
        {
            name: "Servizi",
            value: "Asporto, Cani ammessi"
        },
        {
            name: "Orari",
            value: "Lun-Dom: 12:00-15:00, 19:00-23:00"
        }
    ]
}];

const loadHiddenNavItem = function () {
    let navbar = document.querySelector("nav");
    let item = document.createElement("a");
    item.href = "ristorante.html";
    item.textContent = "Ristorante";
    item.classList = "nav-item active";
    navbar.appendChild(item);
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

//localStorage.setItem("restautantIndex", 0);

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