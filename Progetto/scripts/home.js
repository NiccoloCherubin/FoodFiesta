let currentRestaurant = 0;

const creazione = function(){
    let div = document.body.querySelector(".image-container");

    let section = document.createElement("section");
    section.id = `ristorante-${currentRestaurant}`;

    let titolo = document.createElement("h2");
    titolo.textContent = ristoranti[currentRestaurant].name;

    let immagine = document.createElement("img");
    immagine.src = ristoranti[currentRestaurant].image;


    let specializzazione = document.createElement("p");
    specializzazione.textContent = `Spcecializzazione:${ristoranti[currentRestaurant].specialization}`;

    let stasrs = document.createElement("p");
    stasrs.textContent = `Stelle:${ristoranti[currentRestaurant].stars}`;

    let informazioni = document.createElement("p");
    informazioni.textContent = `Informazioni:${ristoranti[currentRestaurant].informations}`;

    section.appendChild(titolo);
    section.appendChild(immagine);
    section.appendChild(specializzazione);
    section.appendChild(stasrs);
    section.appendChild(informazioni);

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