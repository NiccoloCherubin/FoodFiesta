const MIN = 1;
const MAX = 10;

const Random = function (min, max)
{
    return Math.floor(Math.random() * (max-min)) + min;
}

function Main()
{
    let numeroSegreto = Random(MIN, MAX);
    let input = document.body.querySelector("#valoreInput");
    document.body.querySelector("#verifica").addEventListener("click", () => {
        console.log(numeroSegreto);
        if (numeroSegreto == input.value)
        {
            alert("Congratulazioni, hai indovinato il numero :)");
        }
        else
        {
            alert("Che peccato, hai sbagliao :(")
        }
    });
    document.body.querySelector("#reset").addEventListener("click", () => {
        numeroSegreto = Random(MIN, MAX);
        alert("Numero rigenerato con successo")
    });
}

Main();