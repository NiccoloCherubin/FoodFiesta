const ristorante = {
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
}

const loadHiddenNavItem = function () {
    let navbar = document.querySelector("nav");
    let item = document.createElement("a");
    item.href = "ristorante.html";
    item.textContent = "Ristorante";
    item.classList = "nav-item active";
    navbar.appendChild(item);
}

const loadRestaurantData = function()
{
    let informations = document.querySelector(".restaurant-informations");
    document.querySelector("#restaurant-title").textContent = ristorante.name;
    document.querySelector("#restaurant-specialization").textContent = ristorante.specialization;
    document.querySelector("#restaurant-image").src = ristorante.image;
    document.querySelector("#stars").style.width = ristorante.stars * 20 + "px";
    for (information in ristorante.informations)
    {
        let item = document.createElement("div");
        item.classList = "restaurant-information";

        let title = document.createElement("h3");
        title.textContent = ristorante.informations[information].name;
        item.appendChild(title);

        let content = document.createElement("p");
        content.textContent = ristorante.informations[information].value;
        item.appendChild(content);
        
        informations.appendChild(item);
    }
}

loadHiddenNavItem();
loadRestaurantData();

document.querySelector(".input-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Prenotazione effettuata con successo!")
});