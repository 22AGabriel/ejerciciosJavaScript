let var1 = parseInt(prompt("Ingrese un numero"));

if ((var1 % 2) === 0){
    document.write("El número ingresado es divisible por 2");
    if((var1 % 3) === 0){
        document.write("<br>El número ingresado es divisible por 3");
        if((var1 % 5) === 0){
            document.write("<br>El número ingresado es divisible por 5");
            if((var1 % 7) === 0){
                document.write("<br>El número ingresado es divisible por 7");
            }
        } else if((var1 % 7) === 0){
            document.write("<br>El número ingresado es divisible por 7");
        }
    } else if((var1 % 5) === 0){
        document.write("<br>El número ingresado es divisible por 5");
        if((var1 % 7) === 0){
            document.write("<br>El número ingresado es divisible por 7");
        }
    }
} else if((var1 % 3) === 0){
    document.write("<br>El número ingresado es divisible por 3");
    if((var1 % 5) === 0){
        document.write("<br>El número ingresado es divisible por 5");
        if((var1 % 7) === 0){
            document.write("<br>El número ingresado es divisible por 7");
        }
    } else if((var1 % 7) === 0){
        document.write("<br>El número ingresado es divisible por 7");
    }
} else if((var1 % 5) === 0){
    document.write("<br>El número ingresado es divisible por 5");
    if((var1 % 7) === 0){
        document.write("<br>El número ingresado es divisible por 7");
    }
} else if((var1 % 7) === 0){
    document.write("<br>El número ingresado es divisible por 7");
} else {
    document.write("El número ingresado no es divisible por 2, 3, 5 o 7")
}