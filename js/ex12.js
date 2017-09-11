var op1 = 0;
var op2 = 0;
var notas=0;
var cont = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;
var cont5 = 0;
var cont6 = 0;
var cont7 = 0;
var cont8 = 0;
var cont9 = 0;
var cont10 = 0;
var cont11 = 0;
var letra = "";

function ex12() {
    limparActivo();
    mostraResultado(resposta());
}

function resposta() {
    var val = "";
    var letras = new Array('+', '-', '*', '/');
    letra = letras[Math.floor(Math.random() * letras.length)];
    op1 = parseInt(Math.random() * (99 - 10 + 1) + 10);
    op2 = parseInt(Math.random() * (99 - 10 + 1) + 10);
    cont2=0;
    val = val + (op1 + letra + op2) + "<input id='x'/><input type='button' value='Proba!' onclick='recolleRes(x.value);'/>";
    return val;
}

function recolleRes(x) {
    x = parseFloat(x);

    if (cont < 10) {
        if (letra === '+') {
            if (x == op1 + op2) {
                mostraResultado("Operacion " + (cont + 1) + " correcta, seguinte:<br><br>" + resposta());
                cont++;
                cont2++;
                notas+=cont2;

            } else {
                resultado.innerHTML += "Volve intentalo";
                if (cont2 == 3) {
                    resultado.innerHTML = "Mais de 3 intentos, Operacion " + (cont + 1) + " incorrecta<br><br>" + resposta();
                    cont++;
                }

                cont2++;
                notas+=cont2;

            }

        } else if (letra == '-') {

            if (x == op1 - op2) {
                mostraResultado("Operacion " + (cont + 1) + " correcta, seguinte:<br><br>" + resposta());
                cont++;
                cont2++;
                notas+=cont2;

            } else {

                resultado.innerHTML += "Volve intentalo";
                if (cont2 == 3) {

                    resultado.innerHTML = "Mais de 3 intentos, Operacion " + (cont + 1) + " incorrecta<br><br>" + resposta();
                    cont++;
                }

                cont2++;
                notas+=cont2;

            }

        } else if (letra == '*') {

            if (x == op1 * op2) {
                mostraResultado("Operacion " + (cont + 1) + " correcta, seguinte:<br><br>" + resposta());
                cont++;
                cont2++;
                notas+=cont2;

            } else {

                resultado.innerHTML += "Volve intentalo";
                if (cont2 == 3) {
                    resultado.innerHTML = "Mais de 3 intentos, Operacion " + (cont + 1) + " incorrecta<br><br>" + resposta();
                    cont++;
                }

                cont2++;
                notas+=cont2;


            }

        } else if (letra == '/') {

            if (x == op1 / op2) {
                mostraResultado("Operacion " + (cont + 1) + " correcta, seguinte:<br><br>" + resposta());
                cont++;
                cont2++;
                notas+=cont2;

            } else {

                resultado.innerHTML += "Volve intentalo";
                if (cont2 == 3) {
                    resultado.innerHTML = "Mais de 3 intentos, Operacion " + (cont + 1) + " incorrecta<br><br>" + resposta();
                    cont++;
                }
                cont2++;
                notas+=cont2;


            }


        }

    } else {
        mostraResultado("FIN DO TEST A CALIFICACION É: " + nota());
    }
}

function nota() {

    if (notas == 10) {
        return "Perfecto";
    } else if (notas == 11 || notas == 12) {
        return "Excelente";
    } else if (notas == 13 || notas == 14 || notas == 15) {
        return "Ben";
    } else if (notas >= 16 && notas <= 20) {
        return "Regular";
    } else if (notas >= 21 && notas <= 30) {
        return "Mal";
    } else if (notas > 30) {
        return "Lamentable";
    }

}
