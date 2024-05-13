function spinWheel() {
  var numbers = document.querySelector('.numbers');
  numbers.innerHTML = ''; // Pulisco i numeri precedenti

  // Aggiungo numeri casuali alla ruota (da 1 a 20)
  for (var i = 1; i <= 20; i++) {
    var numberDiv = document.createElement('div');
    numberDiv.className = 'number';
    numberDiv.textContent = i;
    numbers.appendChild(numberDiv);
  }

  var randomIndex = Math.floor(Math.random() * 20); // Genero un numero casuale tra 0 e 19
  var selectedNumber = numbers.children[randomIndex].textContent; // Recupero il numero selezionato

  var ball = document.querySelector('.ball');
  var rotationAngle = randomIndex * (360 / 20); // Calcolo l'angolo di rotazione

  ball.style.transition = 'transform 2s ease-in-out';
  ball.style.transform = `rotate(${rotationAngle}deg) translateY(-150px)`;

  setTimeout(function() {
    alert("Il numero selezionato è: " + selectedNumber);
  }, 2000);
}
