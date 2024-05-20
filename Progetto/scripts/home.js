let currentRestaurant = 0;

//creazione carasoul di ristoranti
const creazione = function(){
    var div = document.body.querySelector(".contenitore-immagini");

    //sezione che conterrà immagini e titolo
    var section = document.createElement("section");
    section.id = `ristorante-${currentRestaurant}`;

    //titolo
    var titolo = document.createElement("h2");
    titolo.textContent = ristoranti[currentRestaurant].name;

    //immagine
    var immagine = document.createElement("img");
    immagine.src = ristoranti[currentRestaurant].image;

    //link che porta alla lista dei ristoranti
    var a = document.createElement("a");
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
    var divRistoranteMese = document.body.querySelector("#ristorante-mese");

    //calcolo dell'indice casuale con il random
    let indiceCasuale = Math.floor(Math.random() * ristoranti.length);

    var titolo = document.createElement("h2");
    titolo.textContent = ristoranti[indiceCasuale].name;
    
    var imgRistoranteMese = document.createElement("img");
    
    //calcolo in modo randomatico il ristorante del mese
    imgRistoranteMese.src = ristoranti[indiceCasuale].image;
    
    divRistoranteMese.appendChild(titolo);
    divRistoranteMese.appendChild(imgRistoranteMese);
    
    showRestaurant(currentRestaurant);

}
ristoranteMese();

