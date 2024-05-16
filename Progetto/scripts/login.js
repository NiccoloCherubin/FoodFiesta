document.body.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    let input = document.body.querySelectorAll("input");
    
    //verifico che dati siano presenti nel local storage
    if(localStorage.getItem("email") == input[0].value && localStorage.getItem("password") == input[1].value)
    {
        localStorage.setItem("logged", "true");
        window.opener.location.reload();
        close();
    }
    else
    {        
        let div = document.createElement("div");
        div.className = "error-message";
        
        let p =document.createElement("p");
        p.className = "error";
        p.textContent = "Dati inseriti non validi. Assicurarsi di aver inserito i dati correttamente";
        
        //aggiunta del p al div
        div.appendChild(p);
        
        //aggiunta del div al documento
        document.body.appendChild(div);
        
    }
});