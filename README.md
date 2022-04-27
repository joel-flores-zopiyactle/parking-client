# Client

## Instalar paquetes
```bash
    npm install
```
## Ejecutar la aplicación
```bash
    ng serve
```
## Acceder a la aplicación
```bash
    http://localhost:4200
```
## Home

Al acceder a la aplicación, como primer vista se encontrará con la página de inicio en donde puedes observar una lista de los estacionamientos que se tienen registrado en la aplicación.

Además cuenta con un formulario que permite buscar una o más estacionamientos con ciertos parámetros para ser más específico en su búsqueda.

Cada carta de los estacionamientos cuenta con un opcion para ver mas información en donde podra ver mas detalles del estacionamiento.  

Además cuenta con un menú de navegación para navegar en la aplicación. Los menús son Home y Register. También hay un link más que se llama filter pero la opción filter es activada cuando la página es visualizada en un dispositivo móvil para poder hacer una búsqueda de un estacionamiento.

## Register

Para registrar un nuevo estacionamiento hay que llegar al formulario de la página register. 

El formulario cuenta con algunas validaciones que hay que cumplir para continuar con el registro.

### Cosas especiales: 

Casi todos los campos son obligatorios, excepto el campo imagen. Para registrar una imagen del estacionamiento hay que ingresar un URL válido que pueda mostrar una imagen. 

En el campo de comodidades hay que ingresar el texto y dar enter para que se agregue a la lista de comunidades que cuenta el estacionamiento.  

En el campo puntuación solo permite ingresar una puntuación máxima de 5.

Una vez que el registro sea exitoso recibirás un mensaje de alerta que su registro ha sido exitoso. Si no, un mensaje de error de que no se pudo hacer el registro. 

## Filter

Para hacer una búsqueda filtrada cuenta con un formulario al inicio de la aplicación en donde puede buscar un estacionamiento por precio máximo, precio mínimo, tipo de estacionamiento y comodidades.

Para las comodidades debe de ingresar una o más opciones separados por una coma (,).

Además de ordenar los estacionamientos por precio mayor o menor 

## Details

En la vista más opción cuenta con la información más detallada del estacionamiento y además con la opción de eliminar dicho estacionamiento. 

Si la operación de eliminar fue exitosa este será direccionado a la página principal.
