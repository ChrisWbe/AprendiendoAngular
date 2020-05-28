//tsc archivo.ts --watch : compilar y visualizar cambios

console.log("Bienvenidos");
console.log("Esto es desde TypeScript");
console.log("Christian Quintero");

//Variables y tipos de datos
var numero:number = 1;
var texto:string = "Texto";
var booleano:boolean = true;


var objPersona = {
    nombre:"Christian",
    apellido:"Quintero",
    edad:27
}
console.log(objPersona.nombre);
console.log(objPersona['nombre']);


interface Personas{ //Obliga a utilizar todas las propiedades, es como una plantilla, ayuda a seguir un estandard
    nombre:string,
    apellido:string,
    edad:number,
    peso:number
}
var objPersona2 : Personas={
    nombre:"Nombre",
    apellido:"Apellido",
    edad:20,
    peso:150
};


var cosa:any = "Texto";
cosa=15;
cosa=true;


var list:Array<string> = ["1", "2", "3", "4"];
console.log(list)


enum tipoMeni{ //Enumerables, muy util con el switch
    canciones = 1,
    albums,
    perfil
}
switch(1){
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


var ternario:string = 5>6 ? "Si" : "No";


//Debugger
debugger
console.log("PRueba debugger")


//ForIn ForOf
var listPersonas: Array<Personas> = [
    {
        nombre:"Name1",
        apellido:"LastName1",
        edad:20,
        peso:150
    },
    {
        nombre:"Name2",
        apellido:"LastName2",
        edad:50,
        peso:200
    },
    {
        nombre:"Name3",
        apellido:"LastName3",
        edad:50,
        peso:200
    }
]
for(let item of listPersonas){ //Crea una instancia por cada item de la lista
    //debugger
    console.log(`Nombre: ${item.nombre}, Apellido: ${item.apellido}, Edad: ${item.edad}, Peso: ${item.peso}`)

}
for(let position in listPersonas){ //Toma la posición de cada elemento en la lista
    console.log(`Nombre: ${listPersonas[position].nombre}, Apellido: ${listPersonas[position].apellido}, Edad: ${listPersonas[position].edad}, Peso: ${listPersonas[position].peso}`)
}


//Funciones
function mostrarHola(mensaje:string="Default"):number{
    console.warn("Hola!!!!");
    console.warn(`El mensaje es: ${mensaje}`)
    return 0;
}
mostrarHola("Mensaje");
mostrarHola();
console.log(mostrarHola());


//Clases
class Alumno{
    private nombre:string;
    private apellido:string;
    private peso:number;

    constructor(nombre:string="Default", apellido:string="Default", peso:number=0){
        this.nombre=nombre;
        this.apellido=apellido;
        this.peso=peso;
    }

    //El metodo no necesita la palabra function
    mostrarMensaje():void{
        console.log(`Hola: ${this.nombre}`)
    }
}
var Juan:Alumno = new Alumno("Juan", "Perez", 80);
Juan.mostrarMensaje();

//Arreglos
//Push: Agregar elementos a un arreglo
list.push("5");
console.log(list);
listPersonas.push({nombre:"Ana", apellido:"PErez", edad:50, peso:100});
console.log(listPersonas);
//Splice: Quitar elementos de un arreglo
list.splice(0, 2);
console.log(list);
listPersonas.splice(0,2);
console.log(listPersonas);
//FuncionesAnónimas
list.forEach((nombre) =>{
    console.log(nombre)
});
listPersonas.forEach((persona)=>{
    console.log(`Aumno: ${persona.nombre}, pesa: ${persona.peso}Kg`);
});
//Find
listPersonas.find((persona)=>{
    return persona.edad == 50
})