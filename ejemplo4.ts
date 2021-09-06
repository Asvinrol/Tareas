//Ejemplo 13
interface Cuadrado{
    color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): {area: number}{
    const area = cuadrado.ancho * cuadrado.ancho;
    return {area: area};
}
crearCuadrado({ancho: 10});
//Ejemplo 14
function imprimir(estadoCivil: 'soltero' | 'casado'){
    console.log(estadoCivil);
}

imprimir('soltero');
//Ejemplo 15
function saludar4(fn: (a: string) => void){
    fn("Hola Mundo")
}
function imprimirEnConsola(s: string){
    console.log(s);
}

saludar4(imprimirEnConsola); 