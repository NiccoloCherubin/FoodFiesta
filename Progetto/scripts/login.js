document.body.querySelector("form").addEventListener("submit", function(event){
    // Faccio in modo che il form non venga inviato in automatico
    event.preventDefault();

    let input = document.body.querySelectorAll("input");
    
    //verifico che dati siano presenti nel local storage
    if(localStorage.getItem("email") == input[0].value && localStorage.getItem("password") == input[1].value)
    {
        localStorage.setItem("logged", "true");
        // Aggiorno la pagina di provenienza e chiudo quella corrente
        window.opener.location.href = "index.html";
        close();
    }
    else
    {        
        // Inserisco l'elemento di errore
        let p =document.createElement("p");
        p.className = "error";
        p.textContent = "Dati inseriti non validi. Assicurarsi di aver inserito i dati correttamente";
        
        //aggiunta del p al div
        document.querySelector("#error-container").appendChild(p);
        // Rimuovo l'elemento dopo 1.5 secondi
        setTimeout(function() {
            p.remove();
        }, 1500);
    }
});