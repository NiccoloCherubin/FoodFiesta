document.body.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    let input = document.body.querySelectorAll("input");
    
    //verifico che dati siano presenti nel local storage
    if(localStorage.getItem("email") == input[0].value && localStorage.getItem("password") == input[1].value)
    {


        //GRAPPEGGIA
        //GRAPPEGGIA

        //to do roba che si cancellano bottoni login e registrati da pagina html e da sostituire con icona utente che porta ad una pagina con dati utenti da localStorage

        //GRAPPEGGIA
        //GRAPPEGGIA



        close();
    }
    else
    {        
        let div = document.body.createElement("div");
        div.className = "error-message";
        
        let p =document.body.createElement("p");
        p.className = "error";
        p.textContent = "Dati inseriti non validi. Assicurarsi di aver inserito i dati correttamente";
        
        //aggiunta del p al div
        div.appendChild(p);
        
        //aggiunta del div al documento
        document.body.appendChild(div);
        
        
        return false;
    }
});