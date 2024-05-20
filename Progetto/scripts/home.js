let currentRestaurant = 0;

//creazione carasoul di ristoranti
const creazione = function(){
    let div = document.body.querySelector(".contenitore-immagini");

    //sezione che conterrà immagini e titolo
    let section = document.createElement("section");
    section.id = `ristorante-${currentRestaurant}`;

    //titolo
    let titolo = document.createElement("h2");
    titolo.textContent = ristoranti[currentRestaurant].name;

    //immagine
    let immagine = document.createElement("img");
    immagine.src = ristoranti[currentRestaurant].image;

    //link che porta alla lista dei ristoranti
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

const ristoranteMese = function(){
    let divRistoranteMese = document.body.querySelector("ristorante-mese");
    
    
    let imgRistoranteMese = document.createElement("img");
    
    //calcolo in modo randomatico il ristorante del mese
    imgRistoranteMese.src = ristoranti[1].image;
    
    divRistoranteMese.appendChild(imgRistoranteMese);
    
    showRestaurant(currentRestaurant);

}
ristoranteMese();

