export class LoggerServices{
    log(msg:string){
        console.log(msg);
    }

    error(msg:string){
        console.log(msg);
    }

    warn(msg:string){
        console.log(msg)
    }


}

//Creación de servicios, para utilizarlos se debe hacer inyección de dependencias