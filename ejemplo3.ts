//Ejemplo 9
const nombres = ["Ramón", "Pedro","Luis"];

nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});

//Ejemplo 10 
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto : Punto) {
    console.log(`La coordenada x es: ${punto.x}`);
    console.log(`La coordenada y es: ${punto.y}`);
}

imprimirCoordenada({x:12, y:21});

// Ejemplo 11
function imnprimirEtiqueta(etiqueta: {label: string}){
    console.log(etiqueta.label);   
}

let miEtiqueta = { numero: 10, label: "Esta es mi Etiqueta Prrona"};
imnprimirEtiqueta(miEtiqueta);

//Ejemplo 12
interface Etiqueta{
    label: string;
}

function imnprimirEti(eti: Etiqueta){
    console.log(eti.label);
};

let miEti = {numero: 10, label:"Esta es mi segunda Etiqueta Prrona"};

imnprimirEti(miEti);