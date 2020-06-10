# Angular

En este proyecto se buscar estudiar Angular, el cual se basa en varios cursos de la web. Dicho estudio se divide en modulos marcados por branchs de acuerdo a cada módulo.

## Módulos
- **mi-component**: Creación de proyecto, creación de componentes por comando, interpolación.
- **input-decorator**: Cambiar una propiedad desde el componente, decorador Input.
- **property-bindings**: Enviar información desde el componente padre al componente hijo.
- **event-bindings**: Enviar información desde el componente hijo al componente padre, eventos.
- **bi-directional-bindings**: Flujo bidireccional utilizando ambos bindings.
- **ng-model**: Flujo bidireccional con ngModel.
- **Template References**: Referencia a las propiedades de un componente, así como sus métodos.
- **Class Bindings**
- **Style Bindings**
- **ngForOf**: Directivas, para el comportamiento de los componentes.
- **ngIf**
- **ngSwitch**
- **ngClass**
- **ngStyle**
- **Pipes y pipes personalizados**
- **Servicios e inyección de dependencias**

## Módulos 2
- **TypeScript**
- **Componentes**
- **Eventos**
- **Directivas**
- **Pipes**
- **Routing**
- **Reactive Forms**
- **Servicios**
- **LocalStorage**: Sistema de pedidos, se agregan clientes y productos, y se relacionan en pedidos. Se utiliza muchos arreglos
- **Core**: ViewChild, Interacción de datos entre componentes, Input, Output, Intalación de paquetes de terceros y utilización
- **ClicloDeVida**: Etapas o ciclos que atraviesa un componente, desde es creado, renderizado hasta que es eliminado del DOM.
- **ProyectoFinal**: Sistema de Gimnasio

## Links de interes
<a href="https://angular.io/cli">Angular CLI</a>

<a href="https://material.angular.io/">Angular Material</a>

<a href="https://material.io/">Material Design</a>

<a href="https://getbootstrap.com/">Bootstrap</a>

<a href="https://jsonplaceholder.typicode.com/">JsonPlaceHolder</a>

<a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Atajos Visual Studio</a>

<a href="https://www.madewithangular.com/">Proyectos realizados con Angular</a>

<a href="https://sweetalert2.github.io/">SweetAlert</a>

<a href="https://www.npmjs.com/">Paquetes npm</a>

## Algunos comandos
Crear componente
```
    ng g component <nombre-componente>

```

Crear servicio
```
    ng g service <nombre-servicio>
```

Crear Pipe
```
    ng g pipe <nombre-pipe>
```

Generar Routing
```
    ng g module app-routing --flat --module=app
    --flat puts the file in src/app instead of its own folder.
    --module=app tells the CLI to register it in the imports array of the AppModule.
```

Optimizado para producción
```
    ng build --prod
```

Subir al tiempo todas las ramas
```
    git push --all origin
```

Agregar todos los archivos modificados y escribir mensaje
```
    git commit -am "mensaje"
```

Crear y mover a rama
```
    git checkout -b <nombre-rama>
```

Renombrar Rama Local
```
    git branch -m <nombre-rama> <nombre-rama-nueva>
```

Eliminar Rama Remota
```
    git push origin :<nombre-rama>
```

Compilar TypeScript y visualizar
```
    tsc <archivo.ts> --watch
```

-----------

# AprendiendoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
