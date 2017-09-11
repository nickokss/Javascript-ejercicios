function ex4(n4) {
    var romano = n4;
    var valor = 0;

    if (romano.search("MMM") != -1) {
        valor += 1000;
    }
    if (romano.search("MM") != -1) {
        valor += 1000;
    }
    if (romano.search("M") != -1) {
        valor += 1000;
    }
    if (romano.search("CM") != -1) {
        valor += 900;
    } else if (romano.search("DCCC") != -1) {
        valor += 800;
    } else if (romano.search("DCC") != -1) {
        valor += 700;
    } else if (romano.search("DC") != -1) {
        valor += 600;
    } else if (romano.search("CD") != -1) {
        valor += 400;
    } else if (romano.search("D") != -1) {
        valor += 500;
    } else if (romano.search("CCC") != -1) {
        valor += 300;
    } else if (romano.search("CC") != -1) {
        valor += 200;
    } else if (romano.search("C") != -1) {
        valor += 100;
    }
    if (romano.search("XC") != -1) {
        valor += 90;
    } else if (romano.search("LXXX") != -1) {
        valor += 80;
    } else if (romano.search("LXX") != -1) {
        valor += 70;
    } else if (romano.search("LX") != -1) {
        valor += 60;
    } else if (romano.search("XL") != -1) {
        valor += 40;
    } else if (romano.search("L") != -1) {
        valor += 50;
    } else if (romano.search("XXX") != -1) {
        valor += 30;
    } else if (romano.search("XX") != -1) {
        valor += 20;
    } else if (romano.search("X") != -1) {
        valor += 10;
    }
    if (romano.search("IX") != -1) {
        valor += 9;
    } else if (romano.search("VIII") != -1) {
        valor += 8;
    } else if (romano.search("VII") != -1) {
        valor += 7;
    } else if (romano.search("VI") != -1) {
        valor += 6;
    } else if (romano.search("IV") != -1) {
        valor += 4;
    } else if (romano.search("V") != -1) {
        valor += 5;
    } else if (romano.search("III") != -1) {
        valor += 3;
    } else if (romano.search("II") != -1) {
        valor += 2;
    } else if (romano.search("I") != -1) {
        valor += 1;
    }

    mostraResultado(valor);
}

function ex5(n5) {
    var numero = parseInt(n5);
    var i;
    var miles;
    var centenas;
    var decenas;
    var unidades;
    var romano = "";
    //obtenemos cada cifra del número
    if (numero >= 1 && numero < 4000) {
        miles = numero / 1000;
        centenas = (numero / 100) % 10;
        decenas = (numero / 10) % 10;
        unidades = numero % 10;

        //millar
        for (i = 1; i <= miles; i++) {
            romano = romano + "M";
        }
        //centenas
        if (centenas >= 9) {
            romano = romano + "CM";
        } else if (centenas >= 5) {
            romano = romano + "D";
            for (i = 6; i <= centenas; i++) {
                romano = romano + "C";
            }
        } else if (centenas >= 4) {
            romano = romano + "CD";
        } else {
            for (i = 1; i <= centenas; i++) {
                romano = romano + "C";
            }
        }
        //decenas
        if (decenas >= 9) {
            romano = romano + "XC";
        } else if (decenas >= 5) {
            romano = romano + "L";
            for (i = 6; i <= decenas; i++) {
                romano = romano + "X";
            }
        } else if (decenas >= 4) {
            romano = romano + "XL";
            for (i = 6; i <= decenas; i++) {
                romano = romano + "X";
            }
        } else {
            for (i = 1; i <= decenas; i++) {
                romano = romano + "X";
            }
        }
        //unidades
        if (unidades >= 9) {
            romano = romano + "IX";
        } else if (unidades >= 5) {
            romano = romano + "V";
            for (i = 6; i <= unidades; i++) {
                romano = romano + "I";
            }
        } else if (unidades >= 4) {
            romano = romano + "IV";
        } else {
            for (i = 1; i <= unidades; i++) {
                romano = romano + "I";
            }
        }
        mostraResultado(romano);
    } else {
        mostraResultado("Introduce entre 0 e 4000 porfavor...");
    }
}
