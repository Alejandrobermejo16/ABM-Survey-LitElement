# abm-components

`abm-components` es un paquete que contiene varios componentes para utilizar en tus aplicaciones web.

## Instalación

Para instalar el paquete, usa npm:

`npm install abm-components`

# Uso
Una vez que hayas instalado el paquete, puedes utilizar los componentes de la siguiente manera:

Importa el componente en tu archivo JavaScript:

`import 'abm-components/src/components/mi-componente.js';`
Utiliza el componente en tu HTML:

`<mi-componente></mi-componente>`

# Licencia

Este proyecto está bajo la Licencia MIT.


# screen-maintenance

Este componente espera recibir una ruta a donde quieras volver en la prop this.goTo que por defecto esta para volver a raiz = '/';
y tiene puesto un setimeout para definir los segundos en los que serás redireccionado que tiene actualmente el value
this.redirectAfter = 5;

# Ejemplo de uso en ANGULAR/VUE/REACT

    <screen-maintenance [goTo]="'/formacion'" [redirectAfter]="9"></screen-maintenance> 
    <screen-maintenance :goTo="'/formacion'" :redirectAfter="9"></screen-maintenance>
    <screen-maintenance goTo="/formacion" redirectAfter={9}></screen-maintenance>


# progress-bar

Este componente espera recibir el porcentaje inicial de carga a través de la propiedad `progressBar`. Por ejemplo, si defines `progressBar` como `12`, la barra estará casi descargada el maximo es 100. Si no se define, por defecto comenzará en `10`.

El componente también espera recibir `StartLoading` como `true` cuando desees que comience la carga. Por ejemplo, si tienes un botón, deberás crear una función que, al ser pulsada, establezca `StartLoading` en `true` y luego lo pases a tu componente para que se active en ese momento. Alternativamente, puedes establecer `StartLoading` a `true` en algún ciclo de vida del componente, si quieres que cargue mas rapido la barra debes definir en ms
timeChange con los milisegundos que quieres que pasen hasta el siguiente cambio por defecto en 200ms para que sea un segundo por ejemplo serian 1000ms

# Ejemplo de uso en ANGULAR/VUE/REACT

    <progress-bar [progressBar]="20" [StartLoading]="true" [timeChange]="2000"></progress-bar>
    <progress-bar :progressBar="20" :StartLoading="true" :timeChange="1500"></progress-bar>
    <progress-bar progressBar="20" StartLoading="true" timeChange="500"></progress-bar>


# abm-modal 

 # instalacion 

 import 'abm-components/src/abmmodal/abmmodal';


 permite mostrar un modal con la opción de un banner informativo.

# Propiedades:

open (Boolean): Indica si el modal está abierto o cerrado. Por defecto es true.
message (String): Mensaje que se mostrará en el modal.
openbanner (Boolean): Indica si el banner está abierto o cerrado. Por defecto es false.
messageBanner (String): Mensaje que se mostrará en el banner.
titleButton1 (String): Título del primer botón en el banner. Por defecto es 'Cerrar'.
titleButton2 (String): Título del primer botón en el banner. Por defecto es 'Aceptar'.

# Uso
    <abm-modal .message="Tu mensaje aquí"></abm-modal>
    <abm-modal .openbanner="${true}" .messageBanner="¿Estás seguro de realizar la acción?" 
    .titleButton1="Cerrar" .titleButton2="Aceptar"></abm-modal>
    <abm-modal message="Tu mensaje aquí"></abm-modal>


