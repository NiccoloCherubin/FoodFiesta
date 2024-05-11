let btn = document.querySelector('input[type = "submit"]');
btn.addEventListener("click",function(){
    let userName = document.querySelector('input[type="text"]').value;
    let password= document.querySelector('input[type="password"]').value;
    console.log(`username: ${userName.value} password: ${password.value}`);        

    if(userName && password)
        {
            localStorage.setItem("username",userName);
            localStorage.setItem("password",password);
            window.opener.location.reload();
            window.close();
            
        }
    else
    {
        alert("inserire i dati");    
    }
})
