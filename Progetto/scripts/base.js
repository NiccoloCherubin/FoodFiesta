const pages = {
    "Home": "index.html",
    "Ristoranti" : "listaRistoranti.html",
    "Faq" : "faq.html",
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

const loadHeader = function () {
    let header = document.createElement("header");

    let logo = document.createElement("img");
    logo.src = "assets/logo.png";
    logo.alt = "Logo";
    logo.classList = "logo";

    let accounting = document.createElement("div");
    accounting.className = "accounting";

    //controllo se è stata effettuata la registrazione
    if (localStorage.getItem("logged") == "true") {
        //se è stata effettuata la registrazione mostra i dati
        let profile = document.createElement("div");
        profile.id = "profile";
        
        let image = document.createElement("img");
        image.src = "assets/user.png";
        image.alt = "User";
        image.id = "user";
        profile.appendChild(image);

        let user = document.createElement("span");
        user.textContent = `${localStorage.getItem("name")} ${localStorage.getItem("surname")}`;

        let dropdown = document.createElement("div");
        dropdown.classList = "dropdown";

        let logout = document.createElement("button");
        logout.textContent = "Logout";
        logout.id = "logout";

        
        dropdown.appendChild(logout);
        profile.appendChild(user);
        profile.appendChild(dropdown);
        accounting.appendChild(profile);
    }
    else {
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


    header.appendChild(logo);
    header.appendChild(accounting);
    document.body.insertBefore(header, document.body.querySelector(".content"));
}

const loadNavbar = function () {
    let navbar = document.createElement("nav");
    const filename = location.pathname.split("/").pop();

    for (let key in pages) {
        let element = document.createElement("a");
        element.href = pages[key];
        element.innerHTML = key;
        element.classList = "nav-item";
        navbar.appendChild(element);
        if (filename == pages[key] || (filename == "" && pages[key] == "index.html")) {
            element.classList.add("active");
        }
    }

    document.body.insertBefore(navbar, document.body.querySelector(".content"));
}

const loadFooter = function () {
    let footer = document.createElement("footer");

    let content = document.createElement("p");
    content.innerHTML = `\
        © ${new Date().getFullYear()} Food Fiesta srl.<br>\
        P.IVA 1234567890 <br><br>\
        Il nostro sapere, il vostro piacere`;

    footer.appendChild(content);
    document.body.appendChild(footer);
}

let displayError = function(title, message)
{
    let errorContainer = document.createElement("div");
    errorContainer.classList = "errorContainer";

    let error = document.createElement("span");
    error.classList = "error";

    let titleEl = document.createElement("h2");
    titleEl.textContent = title;

    let messageEl = document.createElement("p");
    messageEl.textContent = message;

    let home = document.createElement("a");
    home.href = "index.html";
    home.textContent = "Vai alla home";
    home.classList = "button";


    error.appendChild(titleEl);
    error.appendChild(messageEl);
    error.appendChild(home);
    errorContainer.appendChild(error);
    document.body.insertBefore(errorContainer, document.body.querySelector("footer"));
}

const loadHiddenNavItem = function (text, link) {
    let navitems = document.querySelectorAll(".nav-item");
    let navbar = document.querySelector("nav");
    let item = document.createElement("a");
    item.href = link;
    item.textContent = text;
    item.classList = "nav-item active";
    navbar.insertBefore(item, navitems[navitems.length - 1]);
}

loadHeader();
loadNavbar();
loadFooter();
//aggiunta evento al bottone register
if (localStorage.getItem("logged") != "true")
{
    register.addEventListener("click", LoadRegisterPage);
    login.addEventListener("click", LoadLoginPage);
}
else 
{
    document.querySelector("#logout").addEventListener("click", function () {
        localStorage.setItem("logged", "false");
        location.reload();
    });
}