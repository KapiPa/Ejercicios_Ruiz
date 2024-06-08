//let array = [32, "nublado", 12, "lluvioso"];

// Métodos de Array

// <--Permiten modificar el Array -->

//  pop() . Elimina y devuelve el resto de un Array (borra el ultimo elemento del array)

//let a = array.slice(0,);
//document.write(a);

// shift(); inverso a Pop (Borra el primer elemento)

//  push(); Agrega un elemento al final del vector.

// array.push(12,21,300);

// document.write(array);

// reverse(); invierte el orden de los elementos del array
// unshift(); Contrario a push  (Agrega un elemento al inicio del array)
// sort (); ordena elementos y devuelve el array ordenado (alfabetica o de menor a mayor);

// <---- Devuelven otro array ---->

// join(); Devuelve el array convertido en string y se le puede pasar la 
// concatenación como parámetro


// let resul = array.join(" hola  ");
// document.write(resul);

// slice(); Permite "recortar" una parte del vector elegida por sus 
// posiciones y lo devuelve en otro vect

// array = [1, 3, 19, 145];

// let result = array.slice(0,10);

// document.write(result);


// Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
// 1) Ana, Osvaldo, Raúl, Celia, María, Antonio
// (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
// 2)  Imprime la clasificación actual
// 3) Antes de comenzar la carrera se solicita que se ordenen alfabéticamente según su nombre
// El concurso continua, y se van modificando esas posiciones anteriores. Debemos cambiar en el array:
// 4) Raul es descalificado y se elimina del concurso
// 5) Delante de Ana y  Osvaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
// 6) Hay una nueva participante que se suma al final de la lista: Marta
// 7) Ocurre un imprevisto y se invierte el orden de los concursantes
// 8) Imprime la clasificación actualizada y menciona en un h1 a quien ganó

/*let clasificaciones = ["Ana", "Osvaldo", "Raúl", "Celia", "María", "Antonio"]
document.write(clasificaciones+`<br>`)
clasificaciones.sort()
let cambio = clasificaciones.slice(0,5)
document.write(`<br>`+cambio)
cambio.splice(0, 0, "Roberto")
cambio.splice(5, 0, "Amaya")
cambio.push("Marta")
cambio.reverse()
document.write(`<br><br>La clasificacion actualizada es: ${cambio}<br>`)
document.write(`<br><h1>${cambio[0]}</h1><br>`)*/




/*
1) Crear un array de 5 elementos que contengan partes de la PC, mostrar en consola la posición 3 y en el documento el vector completo
2) Crear un array que tenga 3 elementos, uno de ellos debe ser otro array de 2 posiciones, mostrar en 
consola la posición 2 del vector que es un elemento.
3) Crear un objeto que tenga 3 valores, que correspondan a roles y lenguajes de programación que se utilizan, mostrar por 
documento el objeto completo y por consola lenguaje que se usa para backend.
*/

//Ejercicio 1
/*let arry = ["Mother board", "Memoria Ram", "Disco solido", "Disco rigido", "Placa de video"]
document.write(arry[3]+"<br>")
document.write(arry.join(" - "))*/

//Ejercicio 2
/*let arry = ["Banana", "Manzana", ["Pera","Uva"]]
console.log(arry[2][1])*/

//Ejercicio 3
/*let arry = {rol: ["HTML","Java Script","C++"]}
document.write(arry.rol)
console.log(arry.rol[2])*/

