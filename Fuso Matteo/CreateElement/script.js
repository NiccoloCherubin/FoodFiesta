let p = document.createElement("p");
p.textContent = "Yaix";
p.style.color = "rgb(140,30,50)";
p.style.fontWeight = "bold";
p.style.fontSize = "20px";
p.classList = "border-child";

//document.body.appendChild(p);
//document.body.querySelector(".border-div").appendChild(p);
document.body.insertBefore(p, document.body.querySelector("script"));