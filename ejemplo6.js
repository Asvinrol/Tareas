var _this = this;
//Ejemplo 19
function calcularLongitud(x) {
    return x.length;
}
console.log(calcularLongitud("Hola mundo bro"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));
//Ejemplo 20
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
//Ejemplo 21
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
//Ejemplo 22
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
