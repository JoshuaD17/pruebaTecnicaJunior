const readline = require('readline');

let interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfaz.question("Escribe la cadena de caracteres: \n", function(res){

    let cadena = res;
    let coinci = cadena.toString().charAt(0);
    let cont = 0;

    for (var i = 1; i < cadena.length; i++){
        if (cadena[i] != coinci){
            cont++;
        }
        if(cadena[i] === coinci){
            break;
        }

    }

    if (cont == 0){
        console.log("El periodo más pequeño es de 1");
    }
    else{
        console.log("El periodo más pequeño es de " +i );
    }

    interfaz.close();
});



