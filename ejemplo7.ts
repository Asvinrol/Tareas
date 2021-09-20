//Ejemplo 23
function sumar(num){
    return num.a + num.b + num.c;
}

const numeros = {a: 1, b:2, c:3};
console.log(sumar(numeros));

//Ejemplo24
function saludar(persona: {nombre: string; edad: number}){
    return `Hola ${persona.nombre}`;
}

console.log(saludar({nombre: "Ramon", edad: 22}));

//Ejemplo 25
interface Persona{
    nombre: string;
    edad: number;
}

function saludo(persona: Persona){
    return `Hola ${persona.nombre}`;
}

console.log(saludo({nombre: "Monchito", edad: 22}));

//Ejemplo 26
interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt'| 'led'
    memoria: number;
    procesador: 'intel' | 'amd'
}

function imprimir(computador: Computadora){
    console.log(`Sistemas Operativos: ${computador.os}`);
    console.log(`Memorias: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}

imprimir({
    os:'windows',
    memoria: 16,
    procesador: 'amd',
});