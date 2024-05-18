// salvo i dati come se fossero in json, li gestisco come se fossero in un file json
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
        "image": "https://example.com/images/la_trattoria.jpg",
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
        "image": "https://example.com/images/sushi_house.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Via Torino, 15 - 10100 Torino" },
            { "name": "Numero di telefono", "value": "+39 345 345 3456" },
            { "name": "Specializzazione", "value": "Sushi e cucina giapponese" },
            { "name": "Servizi", "value": "Consegna a domicilio, Tavoli all'aperto" },
            { "name": "Orari", "value": "Mar-Dom: 12:00-15:00, 19:00-23:00" }
        ]
    }
];
