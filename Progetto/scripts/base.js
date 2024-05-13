const pages = {
    "Home": "index.html",
    "Login" : "login.html"
}


const LoadRegisterPage = function(){

    //creazione finestra di login
    const width = 600;
    const height = 500;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let registerPage = document.open("", "", "width = " + width + ",height = " + height + ",left = " + left + ",top = " + top);
    
    //inserimento del css nel login
    let styleCSS = registerPage.document.createElement("link");
    styleCSS.rel = "stylesheet";
    styleCSS.href = "styles/register.css";
    registerPage.document.head.appendChild(styleCSS);

    //creazione del titolo
    let titolo = registerPage.document.createElement("h1");
    titolo.textContent = "REGISTRAZIONE"   

    //creazione del form dove inserire i dati
    let form = registerPage.document.createElement("form");
    form.classList = "container";

    //nome dell'utente
    let userName = registerPage.document.createElement("input");
    userName.type = "text";
    userName.placeholder = "Nome";
    userName.required = true;

    //cognome dell'utente
    let userSurname = registerPage.document.createElement("input");
    userSurname.type = "text";
    userSurname.placeholder = "Cognome";
    userSurname.required = true;

    //email dell'utente
    let userEmail = registerPage.document.createElement("input");
    userEmail.type = "text";
    userEmail.placeholder = "mario.rossi@esempio.it";
    userEmail.required = true;

    //password dell'utente
    let userPassword = registerPage.document.createElement("input");
    userPassword.type = "password";
    userPassword.placeholder = "password";
    userPassword.required = true;

    //creazione delle label
    let labelUserName = registerPage.document.createElement("label");
    labelUserName.textContent = "Nome";
    let labelUserSurname = registerPage.document.createElement("label");
    labelUserSurname.textContent = "Cognome";
    let labelUserEmail = registerPage.document.createElement("label");
    labelUserEmail.textContent = "Email";
    let labelUserPassword = registerPage.document.createElement("label");
    labelUserPassword.textContent = "Password";    

    //creazione bottone di invio
    let sendButton = registerPage.document.createElement("button");
    sendButton.textContent = "Invia";
    sendButton.classList = "sendButton";
    sendButton.addEventListener("click",InviaDati);

    //aggiunta delle varie sezioni di input nel form
    form.appendChild(labelUserName);
    form.appendChild(userName);

    form.appendChild(labelUserSurname);
    form.appendChild(userSurname);

    form.appendChild(labelUserEmail);
    form.appendChild(userEmail);

    form.appendChild(labelUserPassword);
    form.appendChild(userPassword);

    form.appendChild(sendButton);

    //aggiunta del form e del titolo nella pagina di login
    registerPage.document.body.appendChild(titolo);
    registerPage.document.body.appendChild(form);

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
//aggiunta evento al bottone login
register.addEventListener("click",LoadRegisterPage);