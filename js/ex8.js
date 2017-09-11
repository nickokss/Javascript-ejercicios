function ex8(tri, cad, rec, cir) {
    var triangulo = parseInt(tri);
    var cadrado = parseInt(cad);
    var rectangulo = parseInt(rec);
    var circulo = parseInt(cir);
    var imprime = "";
    var i;
    var j;
    var k;
    var l;

    for ( i = 1; i <= triangulo; i++) {
        imprime += "<p><label>Triangulo" + i +
        "</label>&nbsp;&nbsp;<input id='t" + i + "' type='text'  onChange='calcArea(t"+i+".value,c"+j+".value,r"+k+".value,cc"+l+".value);'></p>";

    }
    for ( j = 1; j <= cadrado; j++) {
        imprime += "<p><label>Cadrado" + j +
        "</label>&nbsp;&nbsp;&nbsp;&nbsp;<input id='c" + j + "' type='text'  onchange'calcArea(t"+i+".value,c"+j+".value,r"+k+".value,cc"+l+".value);'></p>";
    }
    for ( k = 1; k <= rectangulo; k++) {
        imprime += "<p><label>Rectangulo" + k +
        "</label><input id='r" + k + "' type='text'  onchange='calcArea(t"+i+".value,c"+j+".value,r"+k+".value,cc"+l+".value);'></p>";
    }
    for ( l = 1; l <= circulo; l++) {
        imprime += "<p><label>Circulo" + l +
        "</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id='cc" + l + "' type='text' onchange='calcArea(t"+i+".value,c"+j+".value,r"+k+".value,cc"+l+".value);'></p>";
    }

    limparActivo();
    datos.innerHTML = textoDatos + imprime+""+
    "<br><input  type='button' value='Voltar' onclick='pedirDatos8();'></p>";

}
function calcArea(t,c,r,cc){
  var tt= parseInt(t);
  res=",";
  for (var i = 0; i <= tt; i++) {
    res+=tt*3;
  }
  mostraResultado(res);

}
