//tsc archivo.ts --watch : compilar y visualizar cambios
console.log("Bienvenidos");
console.log("Esto es desde TypeScript");
console.log("Christian Quintero");
//Variables y tipos de datos
var numero = 1;
var texto = "Texto";
var booleano = true;
var objPersona = {
    nombre: "Christian",
    apellido: "Quintero",
    edad: 27
};
console.log(objPersona.nombre);
console.log(objPersona['nombre']);
var objPersona2 = {
    nombre: "Nombre",
    apellido: "Apellido",
    edad: 20,
    peso: 150
};
var cosa = "Texto";
cosa = 15;
cosa = true;
var list = ["1", "2", "3", "4"];
console.log(list);
var tipoMeni;
(function (tipoMeni) {
    tipoMeni[tipoMeni["canciones"] = 1] = "canciones";
    tipoMeni[tipoMeni["albums"] = 2] = "albums";
    tipoMeni[tipoMeni["perfil"] = 3] = "perfil";
})(tipoMeni || (tipoMeni = {}));
switch (1) {
    case tipoMeni.canciones:
        console.log("Canciones");
        break;
    case tipoMeni.albums:
        console.log("Albums");
        break;
    case tipoMeni.perfil:
        console.log("Perfil");
        break;
    default:
        console.log("Default");
}
var ternario = 5 > 6 ? "Si" : "No";
//Debugger
debugger;
console.log("PRueba debugger");
//ForIn ForOf
var listPersonas = [
    {
        nombre: "Name1",
        apellido: "LastName1",
        edad: 20,
        peso: 150
    },
    {
        nombre: "Name2",
        apellido: "LastName2",
        edad: 50,
        peso: 200
    },
    {
        nombre: "Name3",
        apellido: "LastName3",
        edad: 50,
        peso: 200
    }
];
for (var _i = 0, listPersonas_1 = listPersonas; _i < listPersonas_1.length; _i++) { //Crea una instancia por cada item de la lista
    var item = listPersonas_1[_i];
    //debugger
    console.log("Nombre: " + item.nombre + ", Apellido: " + item.apellido + ", Edad: " + item.edad + ", Peso: " + item.peso);
}
for (var position in listPersonas) { //Toma la posición de cada elemento en la lista
    console.log("Nombre: " + listPersonas[position].nombre + ", Apellido: " + listPersonas[position].apellido + ", Edad: " + listPersonas[position].edad + ", Peso: " + listPersonas[position].peso);
}
//Funciones
function mostrarHola(mensaje) {
    if (mensaje === void 0) { mensaje = "Default"; }
    console.warn("Hola!!!!");
    console.warn("El mensaje es: " + mensaje);
    return 0;
}
mostrarHola("Mensaje");
mostrarHola();
console.log(mostrarHola());
//Clases
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, peso) {
        if (nombre === void 0) { nombre = "Default"; }
        if (apellido === void 0) { apellido = "Default"; }
        if (peso === void 0) { peso = 0; }
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
    }
    //El metodo no necesita la palabra function
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola: " + this.nombre);
    };
    return Alumno;
}());
var Juan = new Alumno("Juan", "Perez", 80);
Juan.mostrarMensaje();
//Arreglos
//Push: Agregar elementos a un arreglo
list.push("5");
console.log(list);
listPersonas.push({ nombre: "Ana", apellido: "PErez", edad: 50, peso: 100 });
console.log(listPersonas);
//Splice: Quitar elementos de un arreglo
list.splice(0, 2);
console.log(list);
listPersonas.splice(0, 2);
console.log(listPersonas);
//FuncionesAnónimas
list.forEach(function (nombre) {
    console.log(nombre);
});
listPersonas.forEach(function (persona) {
    console.log("Aumno: " + persona.nombre + ", pesa: " + persona.peso + "Kg");
});
//Find
listPersonas.find(function (persona) {
    return persona.edad == 50;
});
