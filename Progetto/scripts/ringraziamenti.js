let parameters = {};

const getParameters = function () {
    let par = location.search.substring(1).split("&");
    console.log(par);
    for (let el of par) {
        let key = el.split("=");
        parameters[key[0]] = key[1];
    }
}

const loadData = function () {
    let table = document.createElement("table");
    table.id = "informazioni";

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

    document.body.querySelector(".content").appendChild(table);
}

getParameters();

let details = {};

if (localStorage.getItem("logged") == "true") {
    if (localStorage.getItem("restautantIndex") != null) {
        let restaurant = ristoranti[localStorage.getItem("restautantIndex")];
        console.log(restaurant);
        details = {
            "Nome": `${localStorage.getItem("name")} ${localStorage.getItem("surname")}`,
            "Ristorante": restaurant.name,
            "Specializzazione": restaurant.specialization,
            "Persone": parameters["persone"],
            "Data": new Date(decodeURIComponent(parameters["data"])),
            "Email": localStorage.getItem("email"),
            "Telefono": decodeURIComponent(parameters["cellulare"]).replace(/\+/g, ' '),
        };
        loadData();
        loadHiddenNavItem("Ringraziamenti", location.href);
    }
    else {
        displayError("Nessun ristorante selezionato", "Per visualizzare questa pagina devi selezionare un ristorante.");
    }
} else {
    displayError("Non sei autenticato", "Per visualizzare questa pagina devi essere autenticato.");
}