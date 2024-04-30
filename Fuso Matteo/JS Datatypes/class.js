class Persona
{
    #nome; // Private
    #cognome;
    eta; // Public
    constructor(nome, cognome, eta)
    {
        this.#nome = nome;
        this.#cognome = cognome;
        this.eta = eta;
    }

    get nome()
    {
        return this.#nome;
    }

    set nome(value)
    {
        this.#nome = value;
    }

    get cognome()
    {
        return this.#cognome;
    }

    saluta()
    {
        console.log(`Ciao, mi chiamo ${this.#nome} ${this.#cognome} e ho ${this.eta} anni`);
    }
}

class Studente extends Persona
{
    #media;
    constructor(nome, cognome, eta, media)
    {
        super(nome, cognome, eta);
        this.#media = media;
    }
    
    toString()
    {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni. La mia media è ${this.#media}`;
    }

    static saluto()
    {
        console.log("Ciao, sono uno studente");
    }
}

let mario = new Persona("Mario", "Rossi", 30);
mario.nome = "Luca";
mario.saluta();
let luca = new Studente("Luca", "Bianchi", 20, 28);
console.log(luca.toString());
Studente.saluto();