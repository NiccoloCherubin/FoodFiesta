// Pagine mostrate nella navbar
const pages = {
    "Home": "index.html",
    "Ristoranti": "listaRistoranti.html",
    "Faq": "faq.html",
}

const LoadRegisterPage = function () {

    //creazione finestra di login
    const width = 600;
    const height = 700;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let registerPage = document.open("register.html", "", `width = ${width},height = ${height}, left = ${left}, top = ${top}`);
}
const LoadLoginPage = function () {

    //creazione finestra di login
    const width = 600;
    const height = 700;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let registerPage = document.open("login.html", "", `width = ${width},height = ${height}, left = ${left}, top = ${top}`);
}

// Funzione per caricare l'header
const loadHeader = function () {
    // Creo l'elemento
    let header = document.createElement("header");

    // Creo il logo
    let logo = document.createElement("img");
    logo.src = "assets/logo.png";
    logo.alt = "Logo";
    logo.classList = "logo";

    // Creo il contenitore per il login
    let accounting = document.createElement("div");
    accounting.className = "accounting";

    //controllo se è stata effettuata la registrazione
    if (localStorage.getItem("logged") == "true") {
        //se è stata effettuata la registrazione mostra i dati
        // Creo il contenitore per i dati del profilo
        let profile = document.createElement("div");
        profile.id = "profile";

        // Creo l'immagine del profilo
        let image = document.createElement("img");
        image.src = "assets/user.png";
        image.alt = "User";
        image.id = "user";
        profile.appendChild(image);

        // Creo il nome dell'utente
        let user = document.createElement("span");
        user.textContent = `${localStorage.getItem("name")} ${localStorage.getItem("surname")}`;

        // Creo l'elemento dropdown
        let dropdown = document.createElement("div");
        dropdown.classList = "dropdown";

        // Creo il bottone per il logout
        let logout = document.createElement("button");
        logout.textContent = "Logout";
        logout.id = "logout";

        // Aggiungo gli elementi al contenitore
        dropdown.appendChild(logout);
        profile.appendChild(user);
        profile.appendChild(dropdown);
        accounting.appendChild(profile);
    }
    else {
        // Se l'utente non è loggato
        //bottone login
        let login = document.createElement("button");
        login.textContent = "Login";
        login.id = "login";

        //bottone register
        let register = document.createElement("button");
        register.textContent = "Registrati";
        register.id = "register";

        //aggiunta bottoni
        accounting.appendChild(login);
        accounting.appendChild(register);
    }

    // Aggiungo gli elementi alla pagina
    header.appendChild(logo);
    header.appendChild(accounting);
    document.body.insertBefore(header, document.body.querySelector(".content"));
}

// Funzione per caricare la navbar
const loadNavbar = function () {
    // Creo l'elemento
    let navbar = document.createElement("nav");
    // Prendo il nome del file corrente
    const filename = location.pathname.split("/").pop();

    for (let key in pages) {
        // Creo un elemento per ogni pagina
        let element = document.createElement("a");
        element.href = pages[key];
        element.innerHTML = key;
        element.classList = "nav-item";

        // Controllo se la pagina è quella corrente
        if (filename == pages[key] || (filename == "" && pages[key] == "index.html")) {
            element.classList.add("active");
        }
        // Aggiungo l'elemento alla navbar
        navbar.appendChild(element);
    }

    // Aggiungo la navbar alla pagina
    document.body.insertBefore(navbar, document.body.querySelector(".content"));
}

// Funzione per caricare il footer
const loadFooter = function () {
    // Creo l'elemento
    let footer = document.createElement("footer");

    // Aggiungo il contenuto
    let content = document.createElement("p");
    content.innerHTML = `\
        © ${new Date().getFullYear()} Food Fiesta srl.<br>\
        P.IVA 1234567890 <br><br>\
        Il nostro sapere, il vostro piacere`;

    // Aggiungo gli elementi alla pagina
    footer.appendChild(content);
    document.body.appendChild(footer);
}

// Funzione per mostrare un errore
let displayError = function (title, message) {
    // Creo il contenitore
    let errorContainer = document.createElement("div");
    errorContainer.classList = "errorContainer";

    // Creo l'elemento per l'errore
    let error = document.createElement("span");
    error.classList = "error";

    // Creo il titolo
    let titleEl = document.createElement("h2");
    titleEl.textContent = title;

    // Creo il messaggio
    let messageEl = document.createElement("p");
    messageEl.textContent = message;

    // Creo il bottone per tornare alla home
    let home = document.createElement("a");
    home.href = "index.html";
    home.textContent = "Vai alla home";
    home.classList = "button";

    // Aggiungo gli elementi alla pagina
    error.appendChild(titleEl);
    error.appendChild(messageEl);
    error.appendChild(home);
    errorContainer.appendChild(error);
    document.body.insertBefore(errorContainer, document.body.querySelector("footer"));
}

// Funzione per caricare un elemento nascosto nella navbar
const loadHiddenNavItem = function (text, link) {
    // Prendo gli elementi della navbar
    let navitems = document.querySelectorAll(".nav-item");
    let navbar = document.querySelector("nav");
    // Creo l'elemento
    let item = document.createElement("a");
    item.href = link;
    item.textContent = text;
    item.classList = "nav-item active";
    // Aggiungo l'elemento alla navbar prima dell'ultimo elemento (FAQ)
    navbar.insertBefore(item, navitems[navitems.length - 1]);
}

// Carico gli elementi
loadHeader();
loadNavbar();
loadFooter();

// Controllo se l'utente è autenticato
if (localStorage.getItem("logged") != "true") {
    //aggiunta evento al bottone register
    register.addEventListener("click", LoadRegisterPage);
    //aggiunta evento al bottone login
    login.addEventListener("click", LoadLoginPage);
}
else {
    // Aggiunto evento al bottone di logout
    document.querySelector("#logout").addEventListener("click", function () {
        localStorage.setItem("logged", "false");
        location.reload();
    });
}