const readline = require('readline');

let interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfaz.question("Inicia la converzación: \n", function(res){

    let cadena = res.toLowerCase();;
    let tam = cadena.length;
    let temp = "";
    let salida = true;

    for (var i = 1; i < tam; i++){
        if(cadena[i] != cadena[i + 1]){
            temp = temp + cadena[i];
        }
    }
    
    if (temp === "hola") {
        console.log(salida);
    }else{
        salida = false
        console.log(salida);
    }
    interfaz.close();
});