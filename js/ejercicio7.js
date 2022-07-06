let numero1 = parseInt(prompt("ingrese el primer número:"));
let numero2 = parseInt(prompt("ingrese el segundo número:"));
let numero3 = parseInt(prompt("ingrese el tercer número:"));

if (numero1 > numero2 && numero1 > numero3){
    document.write("El primer número ingresado es mayor: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3){
    document.write("El segundo número ingresado es mayor: " + numero2);
} else if (numero3 > numero1 && numero3 > numero2){
    document.write("El tercer número ingresado es mayor: " + numero3);
} else {
    document.write("Los números ingresados son iguales: " + numero3);
}