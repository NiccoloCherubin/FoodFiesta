console.group("Data Types");
// Undefined
let variabile;
Stampa(variabile, "Undefined");
// Numero
variabile = 1;
Stampa(variabile, "Numero");
variabile = 1.4;
Stampa(variabile, "Numero");
variabile = 1e14;
Stampa(variabile, "Numero");
variabile = BigInt(1e100);
Stampa(variabile, "Numero");
// Booleano
variabile = true;
Stampa(variabile, "Booleano");
// Array
variabile = [1,2,3];
Stampa(variabile, "Array");
variabile = [1,'A',true];
Stampa(variabile, "Array");
// JSON
variabile = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    anagrafica: function()
    {
        return this.nome + " " + this.cognome + " " + this.eta;
    }
};
Stampa(variabile, "Oggetto");
console.log(variabile.anagrafica());
// Null
variabile = null;
Stampa(variabile, "Null");
console.groupEnd();

function Stampa(variabile, titolo)
{
    console.group(titolo);
    console.log("Valore: ");
    console.log(variabile);
    console.log("Tipo: ");
    console.log(typeof variabile);
    console.groupEnd();
}