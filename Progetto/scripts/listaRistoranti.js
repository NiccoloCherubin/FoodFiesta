// Importo i dati dei ristoranti, richiede NodeJs
//import { jsonData } from './datiRistoranti.js';

// Converto la stringa dati json in oggetti js
//const ristoranti = JSON.parse(jsonData);

// Dati dei ristoranti
const ristoranti = [
    {
        "name": "Pissa e pissa",
        "specialization": "Ristorante e pizzeria",
        "stars": 4.5,
        "image": "https://lh3.googleusercontent.com/p/AF1QipOgRT3q3I2TC-75hProq6sCiVEPdG6LIPEcf0ua=s680-w680-h510",
        "informations": [
            { "name": "Indirizzo", "value": "Via Roma, 1 - 00100 Roma" },
            { "name": "Numero di telefono", "value": "+39 123 123 1234" },
            { "name": "Specializzazione", "value": "Ristorante e pizzeria" },
            { "name": "Servizi", "value": "Asporto, Cani ammessi" },
            { "name": "Orari", "value": "Lun-Dom: 12:00-15:00, 19:00-23:00" }
        ]
    },
    {
        "name": "La Trattoria",
        "specialization": "Ristorante italiano",
        "stars": 4.0,
        "image": "https://www.trattoriadadanilo.com/wp-content/uploads/trattoria-da-danilo-mhp05.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Via Milano, 10 - 20100 Milano" },
            { "name": "Numero di telefono", "value": "+39 234 234 2345" },
            { "name": "Specializzazione", "value": "Cucina tradizionale italiana" },
            { "name": "Servizi", "value": "Wi-Fi gratuito, Parcheggio" },
            { "name": "Orari", "value": "Lun-Sab: 12:00-14:30, 19:00-22:00" }
        ]
    },
    {
        "name": "Sushi House",
        "specialization": "Ristorante giapponese",
        "stars": 4.7,
        "image": "https://blog.sakura.co/wp-content/uploads/2022/03/shutterstock_673266502-2.png",
        "informations": [
            { "name": "Indirizzo", "value": "Via Torino, 15 - 10100 Torino" },
            { "name": "Numero di telefono", "value": "+39 345 345 3456" },
            { "name": "Specializzazione", "value": "Sushi e cucina giapponese" },
            { "name": "Servizi", "value": "Consegna a domicilio, Tavoli all'aperto" },
            { "name": "Orari", "value": "Mar-Dom: 12:00-15:00, 19:00-23:00" }
        ]
    },
    {
        "name": "Burger Deluxe",
        "specialization": "Hamburgeria",
        "stars": 4.2,
        "image": "https://www.industrypancalieri.com/wp-content/uploads/2023/10/hamburgeria-torino.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Via Napoli, 20 - 50100 Firenze" },
            { "name": "Numero di telefono", "value": "+39 456 456 4567" },
            { "name": "Specializzazione", "value": "Hamburger e patatine" },
            { "name": "Servizi", "value": "Parcheggio, Tavoli all'aperto" },
            { "name": "Orari", "value": "Lun-Dom: 11:30-14:00, 18:30-22:00" }
        ]
    },
    {
        "name": "Gelateria Gusto",
        "specialization": "Gelateria",
        "stars": 4.8,
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/11/8c/e1/57/gelateria-smmaggiore.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Piazza della Repubblica, 5 - 40100 Bologna" },
            { "name": "Numero di telefono", "value": "+39 567 567 5678" },
            { "name": "Specializzazione", "value": "Gelati artigianali" },
            { "name": "Servizi", "value": "Asporto, Posti a sedere" },
            { "name": "Orari", "value": "Lun-Dom: 12:00-23:00" }
        ]
    }
];

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
