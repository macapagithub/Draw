


document.addEventListener("mousedown", dibujarMouseDown);
document.addEventListener("mouseup", dibujarMouseUp);
document.addEventListener("mousemove", dibujarMouseMove);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x ;
var y ;

dibujarLinea("red", 200 - 1, 200 - 1, 200 + 1, 200 + 1,papel)

function dibujarMouseMove(evento)
{
  console.log(evento);
  console.log();
}


function dibujarMouseDown(evento)
{
  var colorcito = "blue";
  var movimiento = 5;
  dibujarLinea(colorcito, evento.clientX - 0.5, evento.clientY - 0.5, evento.clientX+ 0.5, evento.clientY + 0.5, papel);
  x = evento.clientX
  y = evento.clientY
}

function dibujarMouseUp(evento)
{
  var colorcito = "blue";
  var movimiento = 5;
  dibujarLinea(colorcito, evento.clientX - 0.5, evento.clientY - 0.5, evento.clientX+ 0.5, evento.clientY + 0.5, papel);
  x = evento.clientX
  y = evento.clientY
}


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath;
}
