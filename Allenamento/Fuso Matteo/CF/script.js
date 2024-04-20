function VocaliConsonanti(str) {
    let vocali = "";
    let consonanti = "";
    let setVocali = ['a', 'e', 'i', 'o', 'u'];
    for (let c of str) {
        if (setVocali.includes(c)) {
            vocali += c;
        }
        else if (c != ' ') {
            consonanti += c;
        }
    }
    return {
        vocali: vocali,
        consonanti: consonanti,
    };
}

function IsLetter(c) {
    return c >= 'A' && c <= 'Z';
}

function Checksum(CF) {
    const dispari = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
    let checksum = 0;
    for (let i = 0; i < CF.length; i++) {
        if (i % 2 == 0) {
            if (IsLetter(CF[i])) {
                checksum += dispari[CF[i].charCodeAt() - 55]; // - 'A' + 10
            }
            else {
                checksum += dispari[CF[i].charCodeAt() - 48]; // - '0'
            }
        }
        else {
            if (IsLetter(CF[i])) {
                checksum += CF[i].charCodeAt() - 65; // - 'A'
            }
            else {
                checksum += CF[i].charCodeAt() - 48; // - '0'
            }
        }
    }
    checksum %= 26;
    return String.fromCharCode(checksum + 65);
}

function CalcolaCF(form) {
    const nascita = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];
    const anagrafica =
    {
        nome: VocaliConsonanti(form.nome.value),
        cognome: VocaliConsonanti(form.cognome.value),
        luogo_nascita: form.luogoNascita.value,
        data_nascita: new Date(form.dataNascita.value),
        sesso: form.sesso.value
    };
    console.log(anagrafica);
    let cf = (anagrafica.cognome.consonanti + anagrafica.cognome.vocali + "XX").slice(0, 3);
    if (anagrafica.nome.consonanti.length > 3) {
        cf += anagrafica.nome.consonanti[0] + anagrafica.nome.consonanti[2] + anagrafica.nome.consonanti[3];
    }
    else {
        cf += (anagrafica.nome.consonanti + anagrafica.nome.vocali + "XX").slice(0, 3);
    }
    cf += anagrafica.data_nascita.getFullYear().toString().slice(-2);
    cf += nascita[anagrafica.data_nascita.getMonth()];
    if (anagrafica.sesso == "Femmina") {
        cf += anagrafica.data_nascita.getDate() + 40;
    } else {
        cf += ("0" + anagrafica.data_nascita.getDate().toString()).slice(-2);
    }
    cf += anagrafica.luogo_nascita;
    cf = cf.toUpperCase();
    cf += Checksum(cf);
    document.getElementById("cf").innerHTML = "Il codice fiscale è: " + cf;
    return false;
}