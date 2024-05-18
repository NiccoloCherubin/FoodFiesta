let currentRestaurant = 0;

const creazione = function(){
    let div = document.body.querySelector(".contenitore-immagini");

    let section = document.createElement("section");
    section.id = `ristorante-${currentRestaurant}`;

    let titolo = document.createElement("h2");
    titolo.textContent = ristoranti[currentRestaurant].name;

    let immagine = document.createElement("img");
    immagine.src = ristoranti[currentRestaurant].image;

    let a = document.createElement("a");
    a.href ="listaRistoranti.html";

    a.append(immagine);

    section.appendChild(titolo);
    section.appendChild(a);    

    div.appendChild(section);
}

function showRestaurant(stopNumber) {
    const stops = document.querySelectorAll('section');
    stops.forEach((stop) => {
        stop.style.display = 'none';
    });
    let ristorante = document.querySelector(`#ristorante-${stopNumber}`);
    console.log(`ristorante-${stopNumber}`)
    ristorante.style.display = "block";
}

document.body.querySelector("#next").addEventListener('click', () => {
    currentRestaurant++;
    if (currentRestaurant > ristoranti.length) 
    {
        currentRestaurant = 1;
    }
    creazione();
    
    showRestaurant(currentRestaurant);
});


showRestaurant(currentRestaurant);