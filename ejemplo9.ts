//Ejemplo 31
const cambry: [string, number] = ["Toyota", 2021];

const [marca, modelo] = cambry;

console.log("La marca del cambry: ", marca);
console.log("El modelo del cambry: ", modelo);

//Ejemplo 32
class Punto{
    x: number;
    y: number;

    constructor(x = 10, y = 10){
        this.x = x;
        this.y = y;
    }
}

    let miPunto = new Punto();
    console.log(miPunto.x);
    console.log(miPunto.y);

//Ejemplo 33
class Video{
    titulo: string;

    constructor(titulo: string){
        this.titulo = titulo;
    }    

    reproducir(): void {
        console.log(`${this.titulo} se esta reproducinedo`);
    }
}

const miVideo = new Video("Naruto Rap");
miVideo.reproducir();

//Ejemplo 34
class Animal{
    moverse() {
        console.log("El animal se mueve");
    }
}

class Perro extends Animal{
    ladrar(){
        console.log("El perro ladra");
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();