function loadNavbar() {
    let nav = document.querySelector("nav");
    let n = 0;
    const pages = {
        "Home": "index.html",
        "Ristoranti": "restaurants.html",
        "Noi": "about.html",
    }

    for (let key in pages) {
        let element = document.createElement("a");
        element.href = pages[key];
        element.innerHTML = key;
        nav.appendChild(element);
        if (key == "Home")
            continue;
        if (document.location.href.includes(element.href)) {
            element.classList.add("active");
            n++;
        }
    }

    if (n == 0) {
        nav.children[0].classList.add("active");
    }
}

loadNavbar();