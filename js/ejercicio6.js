let numero1 = parseInt(prompt("ingrese el primer número:"));
let numero2 = parseInt(prompt("ingrese el segundo número:"));

if (numero1 > numero2){
    document.write("El primer número ingresado es mayor: " + numero1);
} else if (numero2 > numero1){
    document.write("El segundo número es el mayor: " + numero2);
} else {
    document.write("Ambos números son iguales: " + numero1);
}