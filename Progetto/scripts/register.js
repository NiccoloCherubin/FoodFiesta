document.body.querySelector(".sendButton").addEventListener("click", function(event){
    event.preventDefault();

    let input = document.body.querySelectorAll("input");

    localStorage.setItem("name",input[0].value);
    localStorage.setItem("surname",input[1].value);
    localStorage.setItem("email",input[2].value);
    localStorage.setItem("password",input[3].value);

    window.opener.console.log(`${localStorage.getItem("name")} ${localStorage.getItem("surname")} ${localStorage.getItem("email")} ${localStorage.getItem("password")}`);

    window.close();
});