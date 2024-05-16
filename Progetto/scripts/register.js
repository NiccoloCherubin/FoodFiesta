document.body.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    
    let input = document.body.querySelectorAll("input");

    localStorage.setItem("name",input[0].value);
    localStorage.setItem("surname",input[1].value);
    localStorage.setItem("email",input[2].value);
    localStorage.setItem("password",input[3].value);

    location.href = "login.html";

});