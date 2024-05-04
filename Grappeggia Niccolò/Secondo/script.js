const SecretFunction = function()
{
    return Math.floor(Math.random() * 10) + 1; // Math.random() ritorna un numero da 0 a 1 con cifre decimali
}
const ResetFunction = function ()
{
    secretNumber = SecretFunction();
    console.log(secretNumber);
    input.value = null;
}

let secretNumber;

secretNumber =  SecretFunction();

console.log(secretNumber);

let buttons = document.body.querySelectorAll("button");

let input = document.body.querySelector("input");

//console.log(buttons);

/*let buttonCheck = document.body.querySelector("button");
console.log(buttonCheck);*/

buttons[0].addEventListener("click", function () {
    if (secretNumber == input.value)
    {
        alert("Hai indovinato!");
        input.value = null;
    }
    else
    {
        alert("Hai sbagliato!");
        input.value = null;
    }
}); // 2 param: evento, funzione

buttons[1].addEventListener("click", function () {
    ResetFunction();
})

/*buttons[1].addEventListener("click", function () { 
    window.location.reload();
})*/


