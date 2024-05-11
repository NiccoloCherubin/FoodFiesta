// Creazione finestra
const btn = document.body.querySelector("button");

btn.addEventListener("click", function(){
    // Funzione per creare e centrare il finestra
    const width = screen.width / 5; // 20% dello schermo senza usare i pixel
    const height = screen.height / 5;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let newWindow = document.open("", "", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);

    finestra = newWindow.document;

    let styleCss = finestra.createElement("link");
    styleCss.rel = "stylesheet";
    styleCss.href = "style.css";

    finestra.head.appendChild(styleCss);

    let form = newWindow.document.createElement("form");
    form.classList = "container";

    let user = finestra.createElement("input"); // User name input
    user.type = "text";
    user.placeholder = "Nome utente";
    user.required = true;
    
    let pwd = finestra.createElement("input"); // Password Input
    pwd.type = "password";
    pwd.placeholder = "Password";
    pwd.required = true;

    let submit = finestra.createElement("input"); // Submit button
    submit.type = "submit";
    submit.value = "Invia Dati";
    
    finestra.body.appendChild(form);// l'elemento viene aggiunto
    form.appendChild(user);
    form.appendChild(finestra.createElement("br"));
    form.appendChild(pwd);
    form.appendChild(submit);
    
    let script2 = newWindow.document.createElement("script");
    script2.src = "script2.js"
    finestra.body.appendChild(script2);

    submit.addEventListener("click", function(){
        location.reload();
        //newWindow.close(); // non va il required
    });
});

document.body.querySelector("p").textContent = localStorage.getItem("username") + "---" + localStorage.getItem("password");

//localStorage.clear();
