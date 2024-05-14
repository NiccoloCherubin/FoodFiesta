document.body.querySelector(".sendButton").addEventListener("submit", function(event){
    let input = document.body.querySelectorAll("input");
    localStorage.setItem("email",input[0].value);
    localStorage.setItem("password",input[1].value);

    window.opener.console.log(`${localStorage.getItem("email")} ${localStorage.getItem("password")}`);

    window.close();
});