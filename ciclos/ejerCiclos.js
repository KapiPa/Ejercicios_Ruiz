/*1) Imprimir los números del 1 al 10 utilizando un ciclo while.
2) Imprimir los números pares del 2 al 20 utilizando un ciclo for.
3) Calcular la suma de los números del 1 al 100 utilizando un ciclo while.
4) Calcular el producto de los números del 1 al 10 utilizando un ciclo for.
5) Imprimir los números impares del 1 al 50 utilizando un ciclo while.
6) Imprimir la tabla de multiplicar del 5 utilizando un ciclo for.
7) Calcular el factorial de un número ingresado por el usuario utilizando un ciclo
while.
8) Imprimir los números del 10 al 1 utilizando un ciclo for en orden inverso.*/

//Ejercicio 1
/*let cont=0
while(cont<10){
    document.write(`${cont+1} <br>`)
    cont++
}*/

//Ejercicio 2
/*for(let i=2; i<=20; i+=2){
    document.write(`${i} <br>`)
}*/

//Ejercicio 3
/*let i=0, acum=0
while(i<100){
    acum=acum+i+1
    i++
}
document.write(acum)*/

//Ejercicio 4
/*let a=1
for(let i=1; i<=10; i++){
    a*=i
    document.write(`${a}<br>`)
}*/

//Ejercicio 5
/*let a=0
while(a<=50){
    if(a%2!=0){
        document.write(`${a}<br>`)
    }
    a++
}*/

//Ejercicio 6
/*for(let i=0; i<=10; i++){
    document.write(`${i} * 5 = ${i*5}<br>`)
}*/

//Ejercicio 7
/*let a=Number(prompt("ingrese un numero para calcular su factorial"));
let acum=1;
for(let i=1; i<=a; i++){
    acum*=i;
    
}
document.write(`el factorial del numero ingresado es: ${acum}`);*/
//Ejercicio 8
/*
for(let i=10; i>=1; i--){
    document.write(`${i}<br>`)
}*/