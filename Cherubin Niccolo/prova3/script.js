
const SecretFunction = function()
{
   return Math.floor(Math.random() * (20-1) + 1);
}


let secretNum;
secretNum = SecretFunction();
console.log(secretNum);
var buttons =  document.body.querySelectorAll("button"); 
buttons[0].addEventListener("click",function()
  {
    if(document.body.querySelector("input").value == secretNum)
    {
        window.alert("Hai indovinato! Bravo");
    }
    else
    {
        window.alert("Hai sbagliato");
    }
 });

buttons[1].addEventListener("click", function()
 {
    document.body.querySelector("input").value = null;
    secretNum = SecretFunction();
    console.log(secretNum);
 });
