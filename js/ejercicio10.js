let var1 = parseInt(prompt("Ingrese un numero"));

if ((var1 % 2) === 0){
    document.write("El número ingresado (" + var1 + ") es divisible por 2");
} else if ((var1 % 3) === 0){
    document.write("El número ingresado (" + var1 + ") es divisible por 3");
} else if ((var1 % 5) === 0){
    document.write("El número ingresado (" + var1 + ") es divisible por 5");
} else if ((var1 % 7) === 0){
    document.write("El número ingresado (" + var1 + ") es divisible por 7");
}