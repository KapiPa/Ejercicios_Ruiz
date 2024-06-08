// Ejercitación
// Todas las actividades deben realizarse con funciones, sin excepcion
// 1) Que se muestre por pantalla “Hola mundo” mediante el archivo JS.
// 2) Recibir a y b, inicializar ambos valores y mostrar por medio de la variable resultado la suma de a y b en pantalla.
// 3) Recibir num1 y num2, sumarle +1 y +5 respectivamente y mostrar por pantalla los resultados
// 4) Recibir  dos números, mostrar por pantalla el contenido de ambas variables y el resultado de la multiplicación
// 5) Con la variable ingresada por teclado del ejercicio anterior mostrar por pantalla el valor multiplicado *10, en una variable aparte
// 6) Escribir por consola el resultado de sumar a  y b
// 7) Solicitar un numero y si es mayor a 10 imprimir el numero es mayor.
// 8) Solicitar una edad y mostrar por pantalla si es mayor o menor legalmente.
// 9) dos numeros, mostrar el mayor y el menor
// 10) ordernar 3 numeros de mayor a menor 
// 11) Ingresar un numero y definir si es positivo o negativo
// 12) Ingresar un numero y mostrar si es par o impar

//Ejercicio 1
function saludar(){
    document.write("hola mundo")
}

//Ejercicio 2
function suma(parm1, parm2){
    return parm1+parm2;
}

//Ejercicio 3
function raro(parm1, parm2){
    document.write(`los numeros ingresados se les suma un numero ${parm1+1} ${parm2+5}`)
}

//Ejercicio 4
function juan(parm1, parm2){
    document.write(`El contenido de los numeros ingresados son: ${parm1} y ${parm2}<br>`)
    document.write(`El resultado de la multiplicacion de estos es ${parm1*parm2}`)
}

//Ejercicio 5
function dante(parm1){
    juan=parm1*10
    document.write(`El numero ingresado multiplicado por 10 es: ${juan}`)
}

//Ejercicio 6
function lynx(parm1, parm2){
    console.log(`El resultado de ${parm1} + ${parm2} es: ${parm1+parm2}`)
}

//Ejercicio 7
function paragua(parm1){
    if(parm1>10){
        document.write("el numero es mayor")
    }
}

//Ejercicio 8
function mayoromenor(parm1){
    if(parm1<18){
        document.write("es menor de edad")
    }
    else{
        document.write("es mayor de edad")
    }
}

//Ejercicio 9
function mym(parm1, parm2){
    if(parm1>parm2){
        document.write(`el numero mayor es ${parm1} y el numero menor es ${parm2}`)
    }
    else{
        document.write(`el numero mayor es ${parm2} y el numero menor es ${parm1}`)
    }
}

//Ejercicio 10
function menoramayor(parm1, parm2, parm3){
    if(parm1>parm2){
        if(parm2>parm3){
            document.write(`Los numeros ordenados de menor a mayor son <br>${parm1}, ${parm2} y ${parm3}`)
        }
        else{
            document.write(`Los numeros ordenados de menor a mayor son <br>${parm1}, ${parm3} y ${parm2}`)
        }
    }
    else if(parm2>parm3){
        if(parm1>parm3){
            document.write(`Los numeros ordenados de menor a mayor son <br>${parm2}, ${parm1} y ${parm3}`)
        }
        else{
            document.write(`Los numeros ordenados de menor a mayor son <br>${parm2}, ${parm3} y ${parm1}`)
        }
    }
    else{
        if(parm1>parm2){
            document.write(`Los numeros ordenados de menor a mayor son <br>${parm3}, ${parm1} y ${parm2}`)
        }
        else{
            document.write(`Los numeros ordenados de menor a mayor son <br>${parm3}, ${parm2} y ${parm1}`)
        }
    }
}

//Ejercicio 11
function positivoN(parm1){
    if(parm1<0){
        document.write("el numero es negativo")
    }
    else if(parm1>0){
        document.write("el numero es positivo")
    }
    else{
        document.write("el numero es neutro")
    }
}

//Ejercicio 12
function paro(parm1){
    if(parm1%2==0){
        document.write("el numero es par")
    }
    else{
        document.write("el numero es impar")
    }
}








//document.write(`Los numeros ordenados de menor a mayor son <br>${}, ${} y ${}`)

function a(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            medio = num1;
            menor = num2;
        } else {
            medio = num2;
            menor = num1;
        }
    }
}