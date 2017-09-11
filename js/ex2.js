function ex2() {
    limparActivo();
    var carta;
    var cartas1 = new Array(40);
    var cont1 = 0;
    var bandera = false;

    for (var i = 0; cont1 < 40; i++) {
        carta = generarCarta();
        for (var j = 0; j <= cartas1.length; j++) {
            if (cartas1[j] == carta) {
                bandera = true;
            }
        }
        if (!bandera) {
            cartas1[cont1] = carta;
        }
        bandera = false;
    }

    for (var k = 0; k < 4; k++) {
        reparte(jug, k);
    }

    /*
        while (cont2 < 10) {
            cartas2[cont2] = generarCarta();
            datos.innerHTML += "<div class='cartas1'> <img src='baralla/" + cartas2[cont2] + ".jpg'/> </div>";
            cont2++;

        }
        datos.innerHTML += "<div><label>Jugador 3</label>";
        while (cont3 < 10) {
            cartas3[cont3] = generarCarta();
            datos.innerHTML += "<div class='cartas1'> <img src='baralla/" + cartas3[cont3] + ".jpg'/> </div>";
            cont3++;
        }
        datos.innerHTML += "<div><label>Jugador 4</label>";
        while (cont4 < 10) {
            cartas4[cont4] = generarCarta();
            datos.innerHTML += "<div class='cartas1'> <img src='baralla/" + cartas4[cont4] + ".jpg'/> </div>";
            cont4++;
        }
        datos.innerHTML += "</div>";
    */



}
function generarCarta() {
    var num = 0;
    var letra = "";
    var letras = new Array('o', 'e', 'b', 'c');
    letra = letras[Math.floor(Math.random() * letras.length)];
    num = Math.floor((Math.random() * 10) + 1);
    return letra + num;
}
