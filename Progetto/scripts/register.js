document.body.querySelector("form").addEventListener("submit", function(event){
    // Faccio in modo che il form non venga inviato in automatico
    event.preventDefault();
    
    let input = document.body.querySelectorAll("input");

    // Salvo i dati nel local storage
    localStorage.setItem("name",input[0].value);
    localStorage.setItem("surname",input[1].value);
    localStorage.setItem("email",input[2].value);
    localStorage.setItem("password",input[3].value);

    // Reindirizzo alla pagina di login
    location.href = "login.html";

});