var textoEnunciado = "<strong>ENUNCIADO:</strong>";
var textoDatos = "<strong>DATOS:</strong>";
var textoResultado = "<strong>RESULTADO:</strong>";

// limparActivo: Prepara a estética
function limparActivo() {
    exercicio1.classList.remove("activo");
    exercicio2.classList.remove("activo");
    exercicio3.classList.remove("activo");
    exercicio4.classList.remove("activo");
    exercicio5.classList.remove("activo");
    exercicio6.classList.remove("activo");
    exercicio7.classList.remove("activo");
    exercicio8.classList.remove("activo");
    exercicio9.classList.remove("activo");
    exercicio10.classList.remove("activo");
    exercicio11.classList.remove("activo");
    exercicio12.classList.remove("activo");
    exercicio13.classList.remove("activo");
    enunciado.innerHTML = textoEnunciado;
    datos.innerHTML = textoDatos;
    resultado.innerHTML = textoResultado;
}
//
//Esta funcion mostra os resultados
//
function mostraResultado(texto) {
    resultado.innerHTML = textoResultado + "<p>" + texto + "</p>";
}
//
//estas funcions activan e desactivan cada exercicio
//

function exercicio(numero) {
    limparActivo();
    switch (numero) {
        case "1":
            exercicio1.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Calcula se gañaches a porra dos partidos da Liga de Campións e da Copa da UEFA, sabendo que as apostas eran sobre cinco partidos da Liga de Campións e dous da Copa da UEFA e só se podía apostar 1, X ou 2 en cada partido.</p>";
            break;
        case "2":
            exercicio2.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Vamos botar unha partida de tute. Despois de repartir as cartas comproba se algún dos contrincantes pode cantar.</p>";
            break;
        case "3":
            exercicio3.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Saber se un alumno está aprobado ou suspenso na materia, tendo en conta que para aprobar debe ter unha nota maior ou igual a 4 nos exames parciais" +
                " teóricos e prácticos, sempre e cando a nota media dos exames sexa superior ou igual a 5.</p>";
            break;
        case "4":
            exercicio4.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Converter un número romano introducido no seu equivalente arábigo.</p>";
            break;
        case "5":
            exercicio5.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Converter un número arábigo introducido no seu equivalente romano.</p>";
            break;
        case "6":
            exercicio6.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Indicar que tipo de triángulo é (equilátero, isósceles, escaleno ou non é un triángulo) a partir das medidas dos lados introducidas por teclado.</p>";
            break;
        case "7":
            exercicio7.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Dada unha frase, comprobar se é palíndromo.</p>";
            break;
        case "8":
            exercicio8.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Dado un número variable de figuras xeométricas (triángulo, cadrado, rectángulo e círculo) amosar" +
                " a área de cada unha delas e dicir cal é a máis grande. O dato de entrada serán os lados.</p>";
            break;
        case "9":
            exercicio9.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Facer unha páxina que xere dous números do 0 ao 9 aleatoriamente que estarán colocados en dúas caixas. Terá que existir un botón para que os xere e outro" +
                " para que os compare. Cando os compare terá que indicar se son iguais ou non, transferindo o maior dos dous a outra caixa.</p>";
            break;
        case "10":
            exercicio10.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Recoller unha frase mediante un formulario e sacar despois unha estatística por pantalla onde se indique, por separado, cantas letras, números e outro tipo de caracteres hai na frase introducida.</p>";
            break;
        case "11":
            exercicio11.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Amosar por pantalla a táboa de multiplicar dun número dado.</p>";
            break;
        case "12":
            exercicio12.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>Realizar un programa que permita avaliar a capacidade dun neno para realizar as catro operacións aritméticas básicas. O programa deberá presentar 10" +
                " operacións (xeradas aleatoriamente) con números positivos de 2 cifras, dando un máximo de 3 oportunidades por operación. O programa contará o número de oportunidades empregadas, contando 5 no caso de fallar 3 veces a mesma operación, e ao final amosará unha mensaxe de avaliación (10 oportunidades: PERFECTO; 11 ou 12 oportunidades: EXCELENTE; de 13 a 15: BEN; de 16 a 20: REGULAR; de 21 a 30: MAL; máis de 30: LAMENTABLE).</p>";
            break;
        case "13":
            exercicio13.classList.add("activo");
            enunciado.innerHTML = textoEnunciado + "<p>No Parking de Lalín precisan que programemos as máquinas de cobro. Estas admiten para o mesmo billetes de 20, 10 e 5 euros e moedas de 2 e 1 euro e 50, 20, 10 e 5 céntimos. Realiza un programa que devolva o cambio nas mínimas pezas posibles (Por exemplo: tendo que pagar 2,55 euros" +
                " e introducindo un billete de 5 devolva 1 moeda de 2 euros, 2 moedas de 20 céntimos e 1 moeda de 5 céntimos).</p>";
            break;

        default:
            break;
    }
    datos.innerHTML = textoDatos;
    resultado.innerHTML = textoResultado;
    pedirDatos(numero);
}

function pedirDatos(numero) {
    switch (numero) {
        case "1":
            pedirDatos1();
            break;
        case "2":
            pedirDatos2();
            break;
        case "3":
            pedirDatos3();
            break;
        case "4":
            pedirDatos4();
            break;
        case "5":
            pedirDatos5();
            break;
        case "6":
            pedirDatos6();
            break;
        case "7":
            pedirDatos7();
            break;
        case "8":
            pedirDatos8();
            break;
        case "9":
            pedirDatos9();
            break;
        case "10":
            pedirDatos10();
            break;
        case "11":
            pedirDatos11();
            break;
        case "12":
            pedirDatos12();
            break;
        case "13":
            pedirDatos13();
            break;

        default:
            break;
    }
}
///funcions de pedir datos
function pedirDatos1() {
    datos.innerHTML = textoDatos +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<p> <input  name='' type='button' value='Imprime!' onclick='ex1();'></p>";
}

function pedirDatos2() {
    datos.innerHTML = textoDatos +
        "<p><input  type='button' value='Dalle!' onclick='ex2();'></p>";
}

function pedirDatos3() {
    datos.innerHTML = textoDatos +
        "<p><label>Nota do exame teórico: </label><input type='text' id='nota1' ></p>" +
	      "<p><label>Nota do exame práctico: </label><input type='text' id='nota2'  onchange='ex3(nota1.value, nota2.value);'></p>";
}

function pedirDatos4() {
    datos.innerHTML = textoDatos +
        "<p><label>INTRODUCE NUMERO ROMANO: </label><input id='n4' type='text'>" +
        "<input class='boton' type='button' value='Ver numero' onclick='ex4(n4.value);'></p>";
}

function pedirDatos5() {
    datos.innerHTML = textoDatos +
        "<p><label>INTRODUCE NUMERO: </label><input id='n5' type='text'>" +
        "<input class='boton' type='button' value='Ver numero' onclick='ex5(n5.value);'></p>";
}

function pedirDatos6() {
    datos.innerHTML = textoDatos +
        "<p><label>INTRODUCE LADO 1: </label><input id='t1' type='text'>" +
        "<p><label>INTRODUCE LADO 2: </label><input id='t2' type='text'>" +
        "<p><label>INTRODUCE LADO 3: </label><input id='t3' type='text'>" +
        "<p><input  name='suma' type='button' value='Comproba!' onclick='ex6(t1.value,t2.value,t3.value);'></p>";
}

function pedirDatos7() {
    datos.innerHTML = textoDatos +
        "<p><label>INTRODUCE FRASE: </label><input id='n7' type='text'>" +
        "<input class='boton' type='button' value='Dalle!' onclick='ex7(n7.value);'></p>";
}

function pedirDatos8() {
    datos.innerHTML = textoDatos +
        "<p><label>Triangulo</label>&nbsp;&nbsp; <input id='tri' type='number'  ></p>"+
        "<p><label>Cadrado</label>&nbsp;&nbsp;&nbsp;&nbsp; <input id='cad' type='number' ></p>"+
        "<p><label>Rectangulo</label> <input id='rec' type='number' ></p>"+
        "<p><label>Circulo</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input id='cir' type='number'  ></p>"+
        "<input  type='button' value='Meter Datos!' onclick='ex8(tri.value,cad.value,rec.value,cir.value);'></p>";
}

function pedirDatos9() {
    datos.innerHTML = textoDatos +
        "<p><input  name='suma' type='button' value='Dalle!' onclick='ex9();'></p>";
}

function pedirDatos10() {
    datos.innerHTML = textoDatos +
        "<p><label><b>INTRODUCE NUMERO: </b></label><input id='ene' type='text' onchange='ex10(ene.value);'></p>";
}

function pedirDatos11() {
    datos.innerHTML = textoDatos +
        "<p>INTRODUCE CIFRA: <input id='nu' type='text'  onchange='ex11(nu.value);'></p>";
}

function pedirDatos12() {
    datos.innerHTML = textoDatos +
        "<p><input type='button' value='Ver operacions' onclick='ex12();'></p>";
}

function pedirDatos13() {
    datos.innerHTML = textoDatos +
        "<p><input  name='suma' type='button' value='A pagar' onclick='ex13();'></p>";
}

//
//As seguintes funcions executan o código necesario para funcionar o programa
//
////
function ex3(nota1, nota2) {
	nota1 = parseFloat(nota1);
	nota2 = parseFloat(nota2);
	var media = (nota1 + nota2) / 2;
	var resultado;
	if (nota1 < 4 || nota2 < 4) {
		resultado = "O alumno está suspenso, sacou menos dun 4 nalgún dos parciais.";
	} else {
		if (media >= 5) {
			resultado = "O alumno aprobou e ten unha media de " + media + ".";
		} else {
			resultado = "O alumno está suspenso ten unha media de " + media ;
		}
	}
	mostraResultado(resultado);
}

function ex6(t1, t2, t3) {
    var lado1 = parseFloat(t1);
    var lado2 = parseFloat(t2);
    var lado3 = parseFloat(t3);

    if(lado1>=(lado2+lado3)){
      mostraResultado("Non e un triángulo");
    }else if(lado2>=(lado1+lado3)){
      mostraResultado("Non  e un triángulo");
    }else if(lado3>=(lado2+lado1)){
      mostraResultado("Non e un triángulo");
    }else  if (lado1 === 0 || lado2 === 0 || lado3 === 0) {
        mostraResultado("Non e un triángulo");
    } else {
        if (lado1 == lado2 == lado3) {
            mostraResultado("É equilatero");
        } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            mostraResultado("É isósceles");
        } else if (lado1 != lado2 != lado3) {
            mostraResultado("É escaleno");
        }
    }
}

function ex7(n7) {
    var n = (n7);
    var resultado = "";
    //todo en minusculas
    var cadenaOriginal = n.toLowerCase();
    // Convertir a cadena nun array
    var letrasEspacios = cadenaOriginal.split("");
    // Eliminar os espacios en blanco
    var cadenaSinEspacios = "";
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();

    var iguales = true;
    for (i in letras) {
        if (letras[i] == letrasReves[i]) {

        } else {

            iguales = false;
        }
    }
    if (iguales) {
        resultado += "E un palíndromo";
    } else {
        resultado += "Non e un palíndromo";
    }
    mostraResultado(resultado);
}
//Exercicio 9
var num1;
var num2;
function ex9() {
    num1 = parseInt(Math.random() * 10);
    num2 = parseInt(Math.random() * 10);

    if (num1 == num2) {
        limparActivo();
        datos.innerHTML += "<p><input type='button' value='Cambia de caixa!' onclick='cambiaCaixa(num1,num2);'></p>";
    }
    mostraResultado("<div class='ex9'>" + num1 + "</div><div class='ex9'>" + num2 + "</div>");
}

function cambiaCaixa(v1, v2) {
    var num3 = "";
    var nn1 = parseInt(v1);
    var nn2 = parseInt(v2);
    if (nn1 == nn2) {
        num3 += nn1;
    }
    mostraResultado("<div class='ex92'>" + num3 + "</div>");
}

function ex10(ene) {
    var cadena = ene;
    var res = "";
    var cont = 0;
    var cont2 = 0;
    var cont3 = 0;
    var contCaracteres = 0;
    var letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var numero = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var cadenaOriginal = cadena.toLowerCase();
    var divEspacio = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    for (var i in divEspacio) {
        if (divEspacio[i] != " ") {
            cadenaSinEspacios += divEspacio[i];
        }
    }
    for (i = 0; i <= cadenaSinEspacios.length; i++) {
        for (var j = 0; j < letra.length; j++) {
            if (letra[j] === cadenaSinEspacios[i]) {
                cont++;
            }
        }

    }

    for (var k = 0; k < cadenaSinEspacios.length; k++) {
        for (var l = 0; l < letra.length; l++) {
            if (numero[l] === cadenaSinEspacios[k]) {
                cont2++;
            }
        }
    }
    contCaracteres = cadenaSinEspacios.length - (cont + cont2);
    mostraResultado("Letras: " + cont + "<br>Numeros: " + cont2 + "<br>Outros: " +
        contCaracteres);
}

function ex11(nu) {
    var numero = parseInt(nu);
    var res = "";
    for (var i = 0; i < 11; i++) {
        res += nu + "*" + i + " = " + (nu * i) + "<br>";
    }

    mostraResultado(res);
}
