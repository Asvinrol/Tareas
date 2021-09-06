//Ejemplo 9
var nombres = ["Ramón", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es: " + punto.x);
    console.log("La coordenada y es: " + punto.y);
}
imprimirCoordenada({ x: 12, y: 21 });
// Ejemplo 11
function imnprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi Etiqueta Prrona" };
imnprimirEtiqueta(miEtiqueta);
function imnprimirEti(eti) {
    console.log(eti.label);
}
;
var miEti = { numero: 10, label: "Esta es mi segunda Etiqueta Prrona" };
imnprimirEti(miEti);
