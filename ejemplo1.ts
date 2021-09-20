//Ejemplo 1
function saludar(nombre){
    return "Hola, " + nombre;
}

console.log(saludar("Monchito"));

//Ejemplo 2 
let futbolista: [string, number];

futbolista = ['Rual Jimenez',28]

console.log(`El nombre es ${futbolista[0]}`)
console.log(`Su edad es ${futbolista[1]}`)

//Ejemplo 3
enum MarcasDeAuto{
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAuto = MarcasDeAuto.Toyota;

console.log(tacoma);
//Ejercicio 4
function saludar2(): void{
    console.log("Hola Mundo Cruel :U")
}
saludar2();
