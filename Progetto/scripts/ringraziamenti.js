// Funzione per ottenere i parametri dall'URL
const getParameters = function () {
    let parameters = {};
    // Divido la query string in un array di coppie chiave=valore
    let query = location.search.substring(1).split("&");

    for (let element of query) {
        let key = (element + "=").split("=");
        // Inserisco la coppia chiave=valore nell'oggetto parameters
        parameters[key[0]] = decodeURIComponent(key[1].replaceAll("+", " "));
    }
    return parameters;
}

// Funzione per caricare la tabella con i dati della prenotazione
const loadData = function (details) {
    // Creo la tabella
    let table = document.createElement("table");
    table.id = "informazioni";

    // Creo una riga per ogni coppia chiave=valore
    for (let key in details) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");

        th.textContent = key;
        td.textContent = details[key];

        tr.appendChild(th);
        tr.appendChild(td);
        table.appendChild(tr);
    }

    // Aggiungo la tabella alla pagina
    document.body.querySelector(".content").appendChild(table);
}

// Carico l'elemento nascosto nella navbar
loadHiddenNavItem("Ringraziamenti", location.href);

// Controllo se l'utente è autenticato
if (localStorage.getItem("logged") == "true") {
    // Controllo se è stato selezionato un ristorante
    if (localStorage.getItem("restaurantIndex") != null) {
        let parameters = getParameters();
        // Controllo se sono stati passati i parametri necessari
        if ("data" in parameters && "persone" in parameters && "cellulare" in parameters) {
            // Preparo i dati per la tabella e la inserisco
            let restaurant = ristoranti[localStorage.getItem("restaurantIndex")];
            let date = new Date(parameters["data"]);
            loadData({
                "Nome": `${localStorage.getItem("name")} ${localStorage.getItem("surname")}`,
                "Ristorante": restaurant.name,
                "Specializzazione": restaurant.specialization,
                "Persone": parameters["persone"],
                "Data": `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                "Email": localStorage.getItem("email"),
                "Telefono": parameters["cellulare"],
            });
        }
        else {
            displayError("Errore nella richiesta", "C'è stato un problema con la richiesta, perfavore riprova più tardi.");
        }
    }
    else {
        displayError("Nessun ristorante selezionato", "Per visualizzare questa pagina devi selezionare un ristorante.");
    }
} else {
    displayError("Non sei autenticato", "Per visualizzare questa pagina devi essere autenticato.");
}