var miCachorro = { raza: "French" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var x = {
    contenido: "Hola Mundo"
};
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
console.log(x.contenido.toLocaleLowerCase());
//Ejemplo 29
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = [
    "Levantarse",
    "Lavarse los dientes",
    "Sacar ala Kira Lokota",
];
imprimirTareas(misTareas);
var prius = ['Toyota', 2020];
var civic = ['Honda', 2021];
console.log('El Prius es marca: ', prius[0], 'y modelo', prius[1]);
console.log('El Civic es marca: ', civic[0], 'y modelos', civic[1]);
