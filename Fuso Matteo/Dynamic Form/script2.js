let form = document.querySelector('form');

form.addEventListener('submit', () => {
    let user = document.querySelector('input[type="text"]');
    let password = document.querySelector('input[type="password"]');

    if(user.value && password.value) {
        localStorage.setItem('user', user.value);
        localStorage.setItem('password', password.value);
        window.opener.location.reload();
        window.close();
    }
    else
    {
        alert('Please fill in the fields');
    }
});

