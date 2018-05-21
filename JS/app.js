/*Escriba una función 'transformFirstAndLast' que toma un array y devuelve un objeto con:

el primer elemento del array como la clave del objeto, y
el último elemento del array como valor de esa clave.
Ejemplo de entrada:

['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
Valor de retorno de la función (salida):

{
    Queen: 'Beyonce'
}
No cambie el array de entrada. Suponga que todos los elementos del array de entrada serán del tipo string.

Tenga en cuenta que el array de entrada puede tener un número variable de elementos. Tu código debería acomodarse de manera flexible.

Ejemplo, debe manejar la entrada como:

['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']
Valor de retorno de la función (salida):

{
    Kevin: "Spacey"
}*/
var array = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
function transformFirstAndLast(array) {
  var result = {};
  //
      result[array[0]] = array[array.length-1];//array is variable therfore, no need for ['array']
      return result;
}
console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));//Queen : 'Beyonce'

// var object1 ={}
// object1["name"] = "Juno";
// object1.review = 5;
// object1.watch = true;