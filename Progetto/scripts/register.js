document.body.querySelector("form").addEventListener("submit", function(event){
    let input = document.body.querySelectorAll("input");

    localStorage.setItem("name",input[0].value);
    localStorage.setItem("surname",input[1].value);
    localStorage.setItem("email",input[2].value);
    localStorage.setItem("password",input[3].value);

    window.opener.console.log(`${localStorage.getItem("name")} ${localStorage.getItem("surname")} ${localStorage.getItem("email")} ${localStorage.getItem("password")}`);

    close();

    window.opener.location.reload();

    let loadRegisterLogin = false;

    // Store the variable in localStorage
    localStorage.setItem("LoadRegisterLogin", loadRegisterLogin);

    alert("Registrazione effetuata!");
});