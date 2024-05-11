// File js del form

const btn = document.querySelector('input[type="submit"]');
btn.addEventListener("click", function(){
    let username = document.querySelector('input[type = "text"]').value;
    let pwd = document.querySelector('input[type = "password"]').value;
    //alert("Username: " + username + "  Password: " + pwd);


    if(username && pwd) 
    {
        // salvare i dati nel browser
        localStorage.setItem("username", username);
        localStorage.setItem("password", pwd);
        location.reload();
        window.close();
    }
    else {
        alert("inserisci dei dati plz");
    }
});