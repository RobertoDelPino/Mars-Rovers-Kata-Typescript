import { Rover } from '../src/rover';

/*

  - Hace falta determinar el mapa
  ¿Quien conoce a quien?
  - El rovers conoce el mapa

 Casos de uso ->

  Para crear un rovers se envía el mapa creado.

  Para ejecutar los comandos de un rovers, estos llegan como un string de dos lineas: posición y movimientos por hacer
    1. Comprobar que la primera linea siga la siguiente estructura -> "number,number,direction"
    2. Comprobar que la segunda línea contenga movimientos correctos. any is equal to some (R,L,M)
    3. Si todo es correcto, se crea el objeto con los datos correctos.
  
  ¿Cómo comprobar que el rovers está en el límite del mapa y qué hacer?
    1. Crear dos métodos, uno que compruebe la posición en x y otro en y. Se le envía el valor que se le vaya a
       sumar/restar y en caso de "salga" del mapa, se devuelve un true indicando que se va a salir del mapa
    

*/

describe('Mars Rover test', () => {
  it('should be instantiated', () => {
    const rover = new Rover();
    expect(rover).toBeTruthy()
  });


});


