let button = document.querySelector('button');

button.addEventListener('click', () => {
    const width = 600;
    const height = 700;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    let window = document.open("", "", `width=${width}, height=${height}, left=${left}, top=${top}`);
    
    let style = window.document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'style.css');
    window.document.head.appendChild(style);

    let form = document.createElement('form');
    form.classList.add('container');
    
    let title = document.createElement('h1');
    title.textContent = 'Login';

    let user = document.createElement('input');
    user.type = 'text';
    user.placeholder = 'Username';
    user.required = true;
    
    let password = document.createElement('input');
    password.type = 'password';
    password.placeholder = 'Password';
    password.required = true;
    
    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.textContent = 'Submit';
    
    window.document.body.appendChild(form);
    form.appendChild(title);
    form.appendChild(user);
    form.appendChild(window.document.createElement('br'));
    form.appendChild(password);
    form.appendChild(window.document.createElement('br'));
    form.appendChild(submit);
    
    const script2 = window.document.createElement('script');
    script2.src = 'script2.js';
    window.document.body.appendChild(script2);
});

document.body.querySelector('p').textContent = `Welcome, ${localStorage.getItem('user')}, hide your password (${localStorage.getItem('password')})!`