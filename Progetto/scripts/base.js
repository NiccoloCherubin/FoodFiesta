const pages = {
    "Home": "index.html",
}

const loadHeader = function () {
    let header = document.createElement("header");

    let logo = document.createElement("img");
    logo.src = "assets/logo.png";
    logo.alt = "Logo";
    logo.classList = "logo";

    let accounting = document.createElement("div");
    accounting.className = "accounting";

    let login = document.createElement("button");
    login.textContent = "Login";
    login.id = "login";

    let register = document.createElement("button");
    register.textContent = "Registrati";
    register.id = "register";

    accounting.appendChild(login);
    accounting.appendChild(register);
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

loadHeader();
loadNavbar();
loadFooter();