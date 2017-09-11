var cartos = 0;
var pagar = 0;

function ex13() {
    limparActivo();
    pagar = parseInt(Math.random() * (1000 - 10) + 10) * 0.05;
    resultado.innerHTML += "<br><br><div id='ex9'>" + "Debe pagar: " + pagar.toFixed(2) + "</div><br><br>" +
        "&nbsp;<p> <img class='vinte' src='img/vinte.jpg'  onclick='introduce(20);'></img>" +
        "<img src='img/dez.jpg' class='dez' onclick='introduce(10);'></img>" +
        "<img class='cinco' src='img/cinco.jpeg' onclick='introduce(5);'></img>" +
        "<img class='dous' src='img/mon2.jpg' onclick='introduce(2);'></img>" +
        "<img class='un' src='img/mon1.jpg' onclick='introduce(1);'></img>" +
        "<img class='cent50' src='img/50cen.jpg' onclick='introduce(0.5);'></img>"+
        "<img class='cent20' src='img/20cen.jpg' onclick='introduce(0.2);'></img>" +
        "<img class='cent10'src='img/10cen.gif' onclick='introduce(0.1);'></img>" +
        "<img class='cent5' src='img/5cen.jpg' onclick='introduce(0.05);'></img>" +
        "<div id='introducido'></div><br><br><br><br>" +
        "<input type='button' value='Dar cambio' onclick='vuelto();'></div></p>" ;
    actualizarContador();
}

function actualizarContador() {
    introducido.innerHTML = 'Introducido: ' + cartos.toFixed(2) + '€';
}


function introduce(val) {
    val=parseFloat(val);
    if (val == 20) {
        cartos += val;
        actualizarContador();
    }
    if (val == 10) {
        cartos += val;
        actualizarContador();
    }
    if (val == 5) {
        cartos += val;
        actualizarContador();
    }
    if (val == 2) {
        cartos += val;
        actualizarContador();
    }
    if (val == 1) {
        cartos += val;
        actualizarContador();
    }
    if (val == 0.5) {
        cartos += parseFloat(val);
        actualizarContador();
    }
    if (val == 0.2) {
        cartos += parseFloat(val);
        actualizarContador();
    }
    if (val == 0.1) {
        cartos += parseFloat(val);
        actualizarContador();
    }
    if (val == 0.05) {
        cartos += parseFloat(val);
        parseFloat(cartos);
        actualizarContador();
    }

}


function vuelto() {
    if (cartos < pagar) {
        mostraResultado("Introduce más dinero no es suficiente para pagar.");
    }
    if (cartos >= pagar) {
        var devolucion = (cartos - pagar);
        devolucion = devolucion.toFixed(2);

        while (devolucion != 0) {
            if (devolucion >= 20) {
                devolucion -= 20;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='vinte' src='img/vinte.jpg'/>";
            } else if (devolucion >= 10) {
                devolucion -= 10;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img src='img/dez.jpg' class='dez' />";
            } else if (devolucion >= 5) {
                devolucion -= 5;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='cinco' src='img/cinco.jpeg' />";
            } else if (devolucion >= 2) {
                devolucion -= 2;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='dous' src='img/mon2.jpg' />";
            } else if (devolucion >= 1) {
                devolucion -= 1;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='un' src='img/mon1.jpg' />";
            } else if (devolucion >= 0.5) {
                devolucion -= 0.5;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='cent50' src='img/50cen.jpg'/>";
            } else if (devolucion >= 0.2) {
                devolucion -= 0.2;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='cent20' src='img/20cen.jpg'/>";
            } else if (devolucion >= 0.1) {
                devolucion -= 0.1;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='cent10'src='img/10cen.gif'/>";
            } else if (devolucion >= 0.05) {
                devolucion -= 0.05;
                devolucion = devolucion.toFixed(2);
                resultado.innerHTML += "<img class='cent5' src='img/5cen.jpg'/>";
            }

        }
        cartos = 0;
actualizarContador();
}
}
