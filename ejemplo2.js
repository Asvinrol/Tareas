//Ejemplo 5
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(12);
imprimirId('Asvinrol');
//Ejemplo 6
function impid2(id2) {
    if (typeof id2 === "string") {
        console.log("El id2 es " + id2.toUpperCase());
    }
    else {
        console.log("El id2 es " + id2.toFixed(2));
    }
}
impid2('Este_es_mi_id_bro');
impid2(1221.100);
//Ejemplo 7
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Ramón");
//Ejemplo 8
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
