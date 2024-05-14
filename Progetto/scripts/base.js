const pages = {
    "Home": "index.html",
}


const LoadRegisterPage = function(){

    //creazione finestra di login
    const width = 600;
    const height = 500;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let registerPage = document.open("register.html", "", "width = " + width + ",height = " + height + ",left = " + left + ",top = " + top);
}
const LoadLoginPage = function(){

    //creazione finestra di login
    const width = 600;
    const height = 500;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let registerPage = document.open("login.html", "", "width = " + width + ",height = " + height + ",left = " + left + ",top = " + top);
}

const InviaDati = function(){
    localStorage.setItem("name",userName.textContent);
    localStorage.setItem("surname",userSurname.textContent);
    localStorage.setItem("email",userEmail.textContent);
    localStorage.setItem("password",userPassword.textContent);
    this.close()

    /*
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("surname"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("password"));
    */

}

const loadHeader = function () {
    let header = document.createElement("header");

    let logo = document.createElement("img");
    logo.src = "assets/logo.png";
    logo.alt = "Logo";
    logo.classList = "logo";

    let accounting = document.createElement("div");
    accounting.className = "accounting";

    //bottone login
    let login = document.createElement("button");
    login.textContent = "Login";
    login.id = "login";    

    //bottone register
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
//aggiunta evento al bottone register
register.addEventListener("click",LoadRegisterPage);
login.addEventListener("click",LoadLoginPage);