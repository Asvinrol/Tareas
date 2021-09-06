//Ejemplo 1
function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Monchito"));
//Ejemplo 2 
var futbolista;
futbolista = ['Rual Jimenez', 28];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
//Ejemplo 3
var MarcasDeAuto;
(function (MarcasDeAuto) {
    MarcasDeAuto[MarcasDeAuto["Toyota"] = 100] = "Toyota";
    MarcasDeAuto[MarcasDeAuto["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAuto[MarcasDeAuto["Ford"] = 102] = "Ford";
})(MarcasDeAuto || (MarcasDeAuto = {}));
var tacoma = MarcasDeAuto.Toyota;
console.log(tacoma);
//Ejercicio 4
function saludar2() {
    console.log("Hola Mundo Cruel :U");
}
saludar2();
