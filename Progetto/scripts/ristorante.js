const loadHiddenNavItem = function () {
    let navbar = document.querySelector("nav");
    let item = document.createElement("a");
    item.href = "ristorante.html";
    item.textContent = "Ristorante";
    item.classList = "nav-item active";
    navbar.appendChild(item);
}

const ristorante = {
    name: "Pissa e pissa",
    specialization: "Ristorante e pizzeria",
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
        }
    ]
}

const loadRestaurantData = function()
{
    let informations = document.querySelector(".restaurant-informations");
    document.querySelector("#restaurant-specialization").textContent = ristorante.specialization;
    document.querySelector("#restaurant-image").src = ristorante.image;
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