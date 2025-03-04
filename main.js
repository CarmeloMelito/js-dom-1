//Lampadina Spenta
document.getElementById("accendiBottone").addEventListener("click", function () {
    //Fuznione
    const lampadina = document.getElementById("lampadina");
    //spenta
    if (lampadina.src.includes("imgwhite_lamp.png")) {
        //lampadina.src = "img/white_lamp.png";
        this.textContent = "Accendi";
    }
    //Accesa
    else {
        document.getElementById("h1").style.color = "white";
        document.body.style.backgroundColor = "black";
        lampadina.src = "img/yellow_lamp.png";
        this.textContent = "Spegni";
    }

});