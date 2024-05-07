const H1 = document.body.querySelectorAll("h1");

const logEvent = function (event)
{
    this.textContent = "Event: " + event.type + " - Id: " + event.target.id + " - Classlist: " + event.target.classList;
    this.style.backgroundColor = "#333";
    this.style.transition = "background-color 3s";
    setTimeout(() => {
        this.style.backgroundColor = "transparent"
    }, 3000);
}

H1[0].addEventListener("click", logEvent);
H1[1].addEventListener("mousedown", logEvent);
H1[2].addEventListener("mouseup", logEvent);
H1[3].addEventListener("mouseenter", logEvent);
H1[4].addEventListener("mouseleave", logEvent);