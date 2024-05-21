// salvo i dati come se fossero in json, li gestisco come se fossero in un file json
const ristoranti = [
    {
        "name": "Pissa e pissa",
        "specialization": "Ristorante e pizzeria",
        "stars": 4.5,
        "image": "assets/ristoranti/pissa_e_pissa.png",
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
        "image": "assets/ristoranti/la_trattoria.jpg",
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
        "image": "assets/ristoranti/sushi_house.jpg",
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
        "image": "assets/ristoranti/burger_deluxe.jpg",
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
        "image": "assets/ristoranti/gelateria_gusto.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Piazza della Repubblica, 5 - 40100 Bologna" },
            { "name": "Numero di telefono", "value": "+39 567 567 5678" },
            { "name": "Specializzazione", "value": "Gelati artigianali" },
            { "name": "Servizi", "value": "Asporto, Posti a sedere" },
            { "name": "Orari", "value": "Lun-Dom: 12:00-23:00" }
        ]
    },
    {
        "name": "Osteria del Mare",
        "specialization": "Ristorante di pesce",
        "stars": 4.6,
        "image": "assets/ristoranti/osteria_del_mare.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Via del Porto, 10 - 60100 Ancona" },
            { "name": "Numero di telefono", "value": "+39 678 678 6789" },
            { "name": "Specializzazione", "value": "Pesce fresco e frutti di mare" },
            { "name": "Servizi", "value": "Terrazza panoramica, Prenotazioni" },
            { "name": "Orari", "value": "Mar-Dom: 12:00-15:00, 19:00-23:00" }
        ]
    },
    {
        "name": "La Cantina",
        "specialization": "Enoteca e ristorante",
        "stars": 4.3,
        "image": "assets/ristoranti/la_cantina.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Via delle Vigne, 20 - 80100 Napoli" },
            { "name": "Numero di telefono", "value": "+39 789 789 7890" },
            { "name": "Specializzazione", "value": "Vini pregiati e piatti gourmet" },
            { "name": "Servizi", "value": "Degustazioni, Parcheggio" },
            { "name": "Orari", "value": "Lun-Sab: 18:00-23:00" }
        ]
    },
    {
        "name": "Trattoria Toscana",
        "specialization": "Cucina toscana",
        "stars": 4.5,
        "image": "assets/ristoranti/trattoria_toscana.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Via Firenze, 25 - 50100 Firenze" },
            { "name": "Numero di telefono", "value": "+39 890 890 8901" },
            { "name": "Specializzazione", "value": "Cucina tipica toscana" },
            { "name": "Servizi", "value": "Tavoli all'aperto, Accoglienza gruppi" },
            { "name": "Orari", "value": "Lun-Dom: 12:00-15:00, 19:00-22:30" }
        ]
    },
    {
        "name": "Bistro Francese",
        "specialization": "Cucina francese",
        "stars": 4.7,
        "image": "assets/ristoranti/bistro_francese.jpg",
        "informations": [
            { "name": "Indirizzo", "value": "Piazza Parigi, 3 - 00100 Roma" },
            { "name": "Numero di telefono", "value": "+39 901 901 9012" },
            { "name": "Specializzazione", "value": "Cucina gourmet francese" },
            { "name": "Servizi", "value": "Prenotazioni, Menù degustazione" },
            { "name": "Orari", "value": "Mar-Sab: 12:00-14:30, 19:00-22:30" }
        ]
    }
];
